# frozen_string_literal: true

require 'uri'

module Api
  class ListingsController < ApplicationController
    # without a user session
    # only allow index action if URL includes user_id
    before_action :require_logged_in,
                  only: [:index],
                  if: proc { params[:user_id] && !current_user }

    def index
      search_string = params[:search_string]
      search_term = params[:search_term]

      @listings =
        if search_term == 'state'
          Listing.search(search_string)
        else
          Listing.all
        end

      @current_user = current_user

      render :index
    end

    def search
      # TODO(mlkz): address needs some modification to adjust JS streetAddress convention
      @current_user = current_user
      @listings = query_listings

      expected_response = params[:expected_response] # 'listings' or 'suggestions'

      if expected_response == 'listings'
        render 'api/listings/index'
      else
        suggestions = parse_suggestions # search complition suggestions based on user input
        # e.g. if user types 'San' we return 'San Francisco, CA'
        render 'api/listings/search_suggestions', locals: { states: suggestions }
      end
    end

    def show
      @listing = Listing.find(params[:id])
      @current_user = current_user

      render :show
    end

    def create
      @listing = Listing.new(listing_params)

      if @listing.save
        render :show
      else
        render json: @listing.errors.full_messages, status: 422
      end
    end

    def update
      if @listing.update(listing_params)
        render :show
      else
        render json: @report.errors.full_messages, status: :unprocessable_entity
      end
    end

    # IMPORTANT: This action expects an array of listing ids rather than
    # single listing ID. This is because I want to be able to delete
    # many listings at once. But it's not RESTful.
    def destroy
      all_listing_ids = params.require(:listing).permit(listing_ids: [])

      all_listings = Listing.where(id: all_listing_ids[:listing_ids])

      all_listings&.destroy_all

      head :no_content
    end

    private

    def listing_params
      params
        .require(:listing)
        .permit(
          :price,
          :bedroom,
          :bathroom,
          :sqft,
          :address,
          :city,
          :state,
          :zipcode,
          :heating,
          :ac,
          :garage,
          :overview,
          :key_words,
          :price_sqft,
          :owner_id,
          :built_in,
          :building_type,
          :listing_type,
          :est_payment,
          :lat,
          :lng,
          photos: []
        )
        .deep_transform_keys!(&:underscore)
    end

    # Price from front-end is send in comman separated form
    # return query accaptable format in
    def price_to_int(price)
      price.split(',').join('').to_i
    end

    # Add price (min, max) constains to query hash if they are in query stirng
    def add_price_constraints_to_query_hash
      price_constains = {}

      unless params[:min_price].empty? # add minumin constain
        min_int_price = price_to_int(params[:min_price])

        price_constains['price >= :mininum_price'] = { mininum_price: min_int_price }
      end

      return price_constains if params[:max_price].empty? # return or add maximum constains

      max_int_price = price_to_int(params[:max_price])

      price_constains['price <= :maximum_price'] = { maximum_price: max_int_price }

      price_constains
    end

    # Exclude params that need exact match or numerical
    def exclude_non_like_params
      params.except(:term, :min_price, :max_price)
    end

    # Build query has for LIKE params
    def build_query_hash
      query_hash = {}

      # Iterate over LIKE params and build query hash
      exclude_non_like_params.each do |key, value|
        next unless Listing.column_names.include?(key)

        # Prevent SQL injection
        escaped_value = Listing.sanitize_sql_like(value)
        # Decode percent-encoded
        decoded_query_string = URI.decode_www_form_component(escaped_value)

        # build qury
        query_hash["#{key}::text ILIKE :#{key}"] =
          { "#{key}": "%#{decoded_query_string}%" }
      end

      query_hash
    end

    def query_listings
      query_hash = build_query_hash

      query_hash.merge!(add_price_constraints_to_query_hash)

      Listing.where(query_hash.keys.join(' AND '), query_hash.values.reduce(&:merge))
    end

    # If the term is 'city', we need to return both the city and state
    def parse_term
      params[:term] == 'city' ? [term, :state] : [term]
    end

    def parse_suggestions
      term = parse_term

      # Grab all the unique values for the given listing
      # attribute and return them as an array
      suggestions = @listings.pluck(*response_columns)
                             .uniq
                             .map { |suggestion| suggestion.is_a?(Integer) ? suggestion.to_s : suggestion }

      suggestions.map do |suggestion|
        term == 'city' ? "#{suggestion[0]}, #{suggestion[1]}" : suggestion
      end
    end
  end
end

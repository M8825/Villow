require 'uri'

module Api
  class ListingsController < ApplicationController
    # only allow index action if URL includes user_id
    # without a user session
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

    def search_listing_params
      params.permit
    end

    def safe_query_db(query_hash)
      if query_hash.empty?
        []
      else
        Listing.where(query_hash.keys.join(' AND '), query_hash.values.reduce(&:merge))
      end
    end

    def query_listings
      query_hash = {}

      params.except(:term, :min_price, :max_price).each do |key, value|
        next unless Listing.column_names.include?(key)

        escaped_value = Listing.sanitize_sql_like(value)
        decoded_query_string = URI.decode_www_form_component(escaped_value)

        query_hash["#{key}::text ILIKE :#{key}"] =
          { "#{key}": "%#{decoded_query_string}%" }
      end

      # Add price where clause if it exists
      #
      # sanitizing params[:min_price] avoids sql injection by removing any
      # character that can be used to perform SQL injection
      #
      # decode_www_form_component - decode percent-encoded (spaces in query params)
      if params[:min_price]
        # Clean and convert minimum price into integer
        min_price_int = params[:min_price].split(',').join('').to_i

        # min_price =
        #   Listing.sanitize_sql_like(min_price_int)

        query_hash['price >= :mininum_price'] = { mininum_price: min_price_int }
      end

      safe_query_db(query_hash)
    end

    def parse_suggestions
      # Grab the term we're searching for - city, state, zipcode or address
      term = params[:term]

      # If the term is 'city', we need to return both the city and state
      response_columns = term == 'city' ? [term, :state] : [term]

      # Grab all the unique values for the given listing
      # attribute and return them as an array
      suggestions = @listings.pluck(*response_columns)
                             .uniq
                             .map { |suggestion| suggestion.is_a?(Integer) ? suggestion.to_s : suggestion }

      suggestions.map do |suggestion|
        if term == 'city'
          "#{suggestion[0]}, #{suggestion[1]}"
        else
          suggestion
        end
      end
    end
  end
end

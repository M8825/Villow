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

    def parse_suggestions
      term = params[:term]

      response_columns = term == 'city' ? [term, :state] : [term]

      suggestions = @listings.pluck(*response_columns).uniq

      suggestions.map do |suggestion|
        if term == 'city'
          "#{suggestion[0]}, #{suggestion[1]}"
        else
          suggestion
        end
      end
    end

    def search
      # TODO(mlkz): address needs some modification to adjust JS streetAddress convention
      @current_user = current_user
      @listings = query_listings
      expected_response = params[:expected_response] # 'listings' or 'suggestions'

      if expected_response == 'listings'
        render 'api/listings/index'
      else
        suggestions = parse_suggestions

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

      params.except(:term).each do |key, value|
        next unless Listing.column_names.include?(key)

        escaped_value = Listing.sanitize_sql_like(value)
        decoded_query_string = URI.decode_www_form_component(escaped_value)

        query_hash["#{key}::text ILIKE :#{key}"] =
          { "#{key}": "%#{decoded_query_string}%" }
      end

      safe_query_db(query_hash)
    end
  end
end

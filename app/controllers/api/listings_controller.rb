# frozen_string_literal: true

module Api
  class ListingsController < ApplicationController
    include Searchable
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
      major_search_column_names = %w[city state zipcode address]
      @current_user = current_user

      term = major_search_column_names.find { |column_name| params.key?(column_name) }

      expected_response = params[:expected_response] # 'listings' or 'suggestions'
      cities = params[:city]

      query_hash = {}

      params.except(:term).each do |key, value|
        next unless Listing.column_names.include?(key)

        escaped_value = Listing.sanitize_sql_like(value)
        debugger

        query_hash["#{key}::text ILIKE :#{key}"] =
          { "#{key}": "%#{escaped_value}%" }
      end

      debugger

      @listings = if query_hash.empty?
                    Listing.all
                  else
                    Listing.where(query_hash.keys.join(' AND '), query_hash.values.reduce(&:merge))
                  end

      if expected_response == 'listings'
        render 'api/listings/index'
      else
        suggestions = @listings.take(5).pluck(term).uniq

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
  end
end

class Api::ListingsController < ApplicationController
  # only allow index action if URL includes user_id
  # without a user session
  before_action :require_logged_in,
    only: [:index],
    if: proc { params[:user_id] && !current_user }

  def index
    search_string = params[:search_string]
    search_term = params[:search_term]

    @listings = if search_term == "state"
      Listing.search(search_string)
    else
      Listing.all
    end

    @current_user = current_user

    render :index
  end

  def search
    term = params[:term]
    search_filter = params[:search_filter]
    search_str = params[:search_phrase]
    @current_user = current_user

    if term == "state"
      if search_filter == "listings"
        @listings = Listing.searchByCityState(search_str)

        render "api/listings/index"
      else
        states = Listing.searchByState(search_str, term)
        render "api/listings/search_suggestions", locals: {states: states}
      end

    end

    if term == "city"
      if search_filter == "listings"
      else
        cities_states = Listing.getSuggestionsByCity(search_str)

        render "api/listings/search_suggestions", locals: {states: cities_states}
      end
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

    all_listings.destroy_all if all_listings

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
end

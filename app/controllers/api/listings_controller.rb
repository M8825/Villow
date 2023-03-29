class Api::ListingsController < ApplicationController
  # only allow index action if URL includes user_id
  # without a user session
  before_action :require_logged_in,
                only: [:index],
                if: Proc.new { params[:user_id] && !current_user }

  def index
    search_string = params[:search_string]
    search_term = params[:search_term]

    if search_term == "state"
      @listings = Listing.search(string)
    else
      @listings = Listing.all
    end

    @current_user = current_user

    render :index
  end

  def search
    term = params[:term]
    search_filter = params[:search_filter]
    search_str = params[:search_phrase]

    if term == "state"
      if (search_filter == "listings")
        debugger
        @current_user = current_user
        @listings = Listing.searchByStateListings(search_str)

        render "api/listings/index"
      else
        states = Listing.searchByState(search_str)
        render "api/listings/search_suggestions", locals: { states: states }
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

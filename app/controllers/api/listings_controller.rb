class Api::ListingsController < ApplicationController
  before_action :set_listing, only: %i[show update destroy]

  def index
    @listings = Listing.all

    render :index
  end

  def show
    @listing = Listing.find(params[:id])

    render :show
  end

  def create
    @listing = Listing.new(listing_params)
    debugger

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

  # TODO: DELETE
  def destroy
  end

  private

  def set_listing
    @listing = Listing.find(params[:id])
  rescue StandardError
    render json: ["Report not found"], status: :not_found
  end

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

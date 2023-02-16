class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all

    render :index
  end

  def show
    @listing = Listing.find(params[:id])

    render :show
  end

  def create
    # :views is not included in listing_params and should have default value 0
    @listing = Listing.new(listing_params)

    debugger
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def listing_params
    params.require(:listing).permit(
      :price,
      :bedroom,
      :bathroom,
      :sqft,
      :address,
      :city,
      :state,
      :zipcode,
      :listing_type,
      :est_payment,
      :building_type,
      :built_in,
      :heating,
      :ac,
      :garage,
      :price_sqft,
      :overview,
      :key_words,
      :owner_id
    )
  end
end

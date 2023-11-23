class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    @listings = current_user.favorited_listings
    @current_user = current_user

    render '/api/listings/index',
           listings: @listings,
           current_user: @current_user
  end

  def create
    @favorite = current_user.favorites.new(favorite_params) if current_user

    if @favorite.save
      @listing = @favorite.listing
      @current_user = current_user
      if @listing.nil?
        render json: { errors: ['Listing not found'] }, status: 404
      else
        render '/api/listings/show'
      end
    else
      render json: { errors: @favorite.errors.full_messages }, status: 422
    end
  end

  def destroy
    @favorite =
      current_user.favorites.find_by(listing_id: favorite_params[:listing_id])

    if @favorite && @favorite.destroy
      @listing = @favorite.listing
      render '/api/listings/show'
    else
      render json: { message: @favorite.errors.full_messages }, status: 422
    end
  end

  private

  def favorite_params
    params.require(:listing).permit(:listing_id)
  end
end

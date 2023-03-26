class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    @listings = current_user.favorited_listings
    @current_user = current_user

    render "/api/listings/index",
           listings: @listings,
           current_user: @current_user
  end

  def create

    if current_user
      @favorite = current_user.favorites.new(favorite_params)
    end

    if @favorite.save
      render "/api/listings/show"
    end
  end

  def destroy
  end

  private

  def favorite_params
    params.require(:listing).permit(:listing_id)
  end
end

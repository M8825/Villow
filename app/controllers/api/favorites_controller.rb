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
  end

  def destroy
  end
end

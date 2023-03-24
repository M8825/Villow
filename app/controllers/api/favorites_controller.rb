class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    @listings = current_user.favorited_listings

    render "/api/listings/index", listings: @listings
  end

  def create
  end

  def destroy
  end
end

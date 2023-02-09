class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all

    render :index
  end

  def show
    @listing = Listing.find(params[:id])

    render :show
  end

  # TODO: add create, update, destroy actions
  def create
  end

  def update
  end

  def destroy
  end
end

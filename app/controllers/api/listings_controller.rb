class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

  def index
    benches = bounds ? Listing.in_bounds(bounds) : Listing.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: seating_range)
    end

    @benches = benches.includes(:reviews, :favorite_users)
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def price_range
    (params[:minSeating]..params[:maxSeating])
  end

  def listing_params
    params.require(:listing).permit(
      :title,
      :description,
      :price,
      :rooms,
      :beds,
      :bathrooms,
      :property_type,
      :longitude,
      :latitude,
    )
  end

  def bounds
    params[:bounds]
  end

end

class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]

  # def index
  #   benches = bounds ? Listing.in_bounds(bounds) : Listing.all

  #   # if params[:minSeating] && params[:maxSeating]
  #     listing = listing.where(seating: seating_range)
  #   end

  #   @listings = listings.includes(:reviews, :favorite_users)
  #   render :index
  # end
  def index 
    debugger
    @listings = Listing.all 
    render "api/listings/index"
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def create
    debugger
    @listing = Listing.new(listing_params)
    # @listing.reserved_status = false
    if @listing.save
      render :show
    else
      render @listing.errors.full_messages
    end
  end

  private
  # range

  def listing_params
    params.require(:listing).permit(
      :title,
      :reserved_status,
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

  # def bounds
  #   params[:bounds]
  # end

end

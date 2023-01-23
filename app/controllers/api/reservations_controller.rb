class Api::ReservationsController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]
  def index 
      user = current_user
      @reservations = user.reservations

      render '/api/reservations/index'
  end
   
  def show
    @listing = Reservation.find(params[:id])
    render :show
  end

  def create
      @reservation = Reservation.new(reservation_params)
        
      if @reservation.save! 
          render 'api/reservations/show'
      else  
          render json: @reservation.errors.full_messages, status: 422
      end
  end

  def update
     @reservation = Reservation.find(params[:id])

      if @reservation.update_attributes(reservation_params)
          render '/api/reservations/show'
      else
          render json: ["Reservation could not be updated, try again!"], status: 404
      end
  end


  def destroy 
      @reservation = Reservation.find(params[:id])
      @reservation.destroy
      render 'api/reservations/show'
  end

  private

  def reservation_params
    params.require(:reservation).permit(:listing_id, :reserver_id, :reservation_start, :reservation_end)
  end
end
class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update, :destroy]
    
  def create 
    @review = Review.new(review_params)

    if @review.save 
        render "api/reviews/show"
    else 
        render json: @review.errors.full_messages, status: 422
    end
  end

  # def index 
  #   @reviews = Review.all.where(listing_id: params[:listing_id])
  #   render "api/reviews/index"
  # end
  def index 
    # debugger
    @reviews = Review.all 
    render "api/reviews/index"
  end

  def show
    @review = Review.find(params[:id])
    render "api/reviews/show"
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render 'api/reviews/show'
  end

 

  private
  def review_params
     params.require(:review).permit(:body, :rating, :cleanliness, :communication,:check_in, :accuracy, :location, :value, :reviewer_id, :reviewed_listing_id )
  end

end
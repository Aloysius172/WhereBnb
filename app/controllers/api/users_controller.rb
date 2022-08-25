class Api::UsersController < ApplicationController
  def index 
    @users = User.all 
    render :index
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    # debugger
    @user = User.new(user_params)

    if @user.save
      # debugger
      login(@user)
      render "api/users/show"
    else
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

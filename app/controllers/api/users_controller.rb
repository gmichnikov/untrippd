class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render 'show_current_user'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
    raise ActiveRecord::RecordNotFound if @user.nil?
    @suggestions = @user.suggestions.order(created_at: :desc).includes(:author, :suggestable)
    render :show
  end

  def user_params
    params.require(:user).permit(:username, :password, :confirm_password, :first_name, :last_name, :email)
  end

end

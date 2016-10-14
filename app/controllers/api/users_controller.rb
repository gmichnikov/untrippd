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
    @user = User.find_by(username: params[:id])#.includes(:followers, :followeds)
    raise ActiveRecord::RecordNotFound if @user.nil?
    @followers = @user.followers.order(:first_name)
    @followeds = @user.followeds.order(:first_name)
    @suggestions = @user.suggestions.order(created_at: :desc).includes(:author, :suggestable)
    render :show
  end

  def user_params
    params.require(:user).permit(:username, :password, :confirm_password, :first_name, :last_name, :email)
  end

  def follow
    @user = User.find(params[:id])
    @user.followers << current_user
    render json: @user.id
  end

  def unfollow
    @uf = UserFollow.where(followed_id: params[:id], follower_id: current_user.id).first
    @uf.destroy
    render json: params[:id]
  end

  def likes
    @user = User.find_by(username: params[:username])
    @suggestions = @user.liked_suggestions
    @followers = @user.followers.order(:first_name)
    @followeds = @user.followeds.order(:first_name)
    render :likes
  end

end

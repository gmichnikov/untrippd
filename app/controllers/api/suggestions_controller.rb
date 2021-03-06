class Api::SuggestionsController < ApplicationController

  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.author_id = current_user.id
    if @suggestion.save
      render 'show'
    else
      render json: @suggestion.errors.full_messages, status: 422
    end
  end

  def show
    @suggestion = Suggestion.find(params[:id])
    render :show
  end

  def index
    @suggestions = Suggestion.all.includes(:author, :suggestable)
    render :index
  end

  def destroy
    @suggestion = Suggestion.find(params[:id])
    @suggestion.destroy
    render json: @suggestion
  end

  def like
    @suggestion = Suggestion.find(params[:id])
    @suggestion.likers << current_user
    render json: params[:id]
  end

  def unlike
    @sl = SuggestionLike.where(suggestion_id: params[:id], liker_id: current_user.id).first
    @sl.destroy
    render json: params[:id]
  end


  def suggestion_params
    params.require(:suggestion).permit(:body, :food, :attraction, :accommodation, :highlight, :suggestable_id, :suggestable_type, :image, :lat, :lng)
  end
end

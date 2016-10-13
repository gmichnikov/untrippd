class Api::SuggestionsController < ApplicationController

  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.author_id = current_user.id
    @suggestion.save!
    render 'show'
    # redirect_to "#/#{@suggestion.suggestable_type.tableize}/#{@suggestion.suggestable_id}"
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


  def suggestion_params
    params.require(:suggestion).permit(:body, :food, :attraction, :accommodation, :highlight, :suggestable_id, :suggestable_type, :image)
  end
end

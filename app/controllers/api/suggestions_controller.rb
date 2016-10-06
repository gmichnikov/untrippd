class Api::SuggestionsController < ApplicationController

  def create
    @suggestion = Suggestion.create!(suggestion_params)
    render :show
    #add current user
  end

  def suggestion_params
    params.require(:suggestion).permit(:body, :food, :attraction, :accommodation, :highlight, :suggestable_id, :suggestable_type)
  end
end

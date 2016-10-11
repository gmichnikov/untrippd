class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
    @suggestions = @city.suggestions.order(created_at: :desc).includes(:author, :suggestable)
    render :show
  end

  def popular
    @cities = City.most_suggested
    render :popular
  end

end

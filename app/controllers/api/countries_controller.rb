class Api::CountriesController < ApplicationController

    def show
      @country = Country.find(params[:id])
      @suggestions = @country.all_suggestions.order(created_at: :desc).includes(:author, :suggestable)
      render :show
    end

end

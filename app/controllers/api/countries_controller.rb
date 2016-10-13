class Api::CountriesController < ApplicationController

    def show
      @country = Country.find(params[:id])
      @suggestions = @country.all_suggestions.order(created_at: :desc).includes(:author, :suggestable)
      render :show
    end

    def popular
      @countries = Country.most_suggested
      render :popular
    end
end

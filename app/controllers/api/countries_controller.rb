class Api::CountriesController < ApplicationController

    def show
      @country = Country.find(params[:id])
      render :show
    end

end

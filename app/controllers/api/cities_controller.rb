class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
    render :show
  end

end

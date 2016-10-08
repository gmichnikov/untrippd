class Api::SearchController < ApplicationController

  def index
    @cities = City.pluck(:id, :name, :place_type_id)
    @countries = Country.pluck(:id, :name, :place_type_id)
    @all_places = @cities + @countries
    render :index
  end

end

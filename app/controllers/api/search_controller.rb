class Api::SearchController < ApplicationController

  def index
    @cities = City.pluck(:id, :name, :place_type_id)
    @countries = Country.pluck(:id, :name, :place_type_id)
    # @all_places = @cities + @countries
    # @all_places = {cities: @cities, countries: @countries}
    @all_places = [{title: "Cities", places: @cities}, {title: "Countries", places: @countries}]
    render :index
  end

end

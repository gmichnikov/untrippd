class Api::SearchController < ApplicationController

  def index
    # @cities = City.pluck(:id, :name).map {|arr| arr.push("cities")}

    usa = Country.find_by(name: "United States")
    uk = Country.find_by(name: "United Kingdom")

    @cities = City.all.includes(:country).map do |city|
      if city.country == usa
        after_comma = ", #{city.state.name}, USA"
      elsif city.country == uk
        after_comma = ", #{city.region.name}, UK"
      else
        after_comma = ", #{city.country.name}"
      end
      [city.id, city.name + after_comma, "cities"]
    end

    @states = Region.where(["country_id = ?", usa.id]).pluck(:id, :name).map {|arr| arr.push("regions")}

    @uk_countries = Region.where(["country_id = ?", uk.id]).pluck(:id, :name).map {|arr| arr.push("regions")}

    @countries = Country.pluck(:id, :name).map {|arr| arr.push("countries")}





    #### @all_places = @cities + @countries
    #### @all_places = {cities: @cities, countries: @countries}


    @all_places = [{title: "Countries", places: @countries + @uk_countries}, {title: "States", places: @states}, {title: "Cities", places: @cities}]

    ### @all_places = [{title: "Cities", places: @cities}]

    render :index
  end

end

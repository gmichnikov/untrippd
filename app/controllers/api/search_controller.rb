class Api::SearchController < ApplicationController

  def index
    # @cities = City.pluck(:id, :name).map {|arr| arr.push("cities")}

    usa = Country.find_by(name: "United States")
    uk = Country.find_by(name: "United Kingdom")

    @cities = City.all.includes(:country).map do |city|
      [city.id, city.display_name, "cities"]
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

  def filter
    usa = Country.find_by(name: "United States")
    uk = Country.find_by(name: "United Kingdom")

    @query = params[:query]
    @cities = City.where('name ~* ?', @query).includes(:country)
    @cities = @cities.map do |city|
      [city.id, city.display_name, "cities"]
    end

    @states = Region.where(["country_id = ?", usa.id]).where('name ~* ?', @query).pluck(:id, :name).map {|arr| arr.push("regions")}

    @uk_countries = Region.where(["country_id = ?", uk.id]).where('name ~* ?', @query).pluck(:id, :name).map {|arr| arr.push("regions")}

    @countries = Country.where('name ~* ?', @query).pluck(:id, :name).map {|arr| arr.push("countries")}

    num_cities = @cities.length
    num_states = @states.length
    num_countries = @countries.length + @uk_countries.length

    @all_places = [{title: "Countries (#{num_countries})", places: @countries + @uk_countries}, {title: "States (#{num_states})", places: @states}, {title: "Cities (#{num_cities})", places: @cities}]

    render :index
  end

end

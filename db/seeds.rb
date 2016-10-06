# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'csv'

ActiveRecord::Base.transaction do

  # User Import
  # csv_text = File.read(Rails.root.join('lib', 'seeds', 'user_seeds.csv'))
  # csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
  #
  # csv.each do |row|
  #   u = User.new
  #   u.username = row['username']
  #   u.first_name = row['first_name']
  #   u.last_name = row['last_name']
  #   u.email = row['email']
  #   u.password = row['password']
  #   u.confirm_password = row['confirm_password']
  #   u.save
  # end

#
#   PlaceType.create!(name: 'country')
#   PlaceType.create!(name: 'region')
#   PlaceType.create!(name: 'city')
#


# Country Import
  # csv_text = File.read(Rails.root.join('lib', 'seeds', 'country_seeds.csv'))
  # csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
  #
  # csv.each do |row|
  #   c = Country.new
  #   c.name = row['name']
  #   c.lat = row['lat']
  #   c.lng = row['lng']
  #   c.place_type_id = row['place_type_id']
  #   c.save
  # end


  # Region Import
  # csv_text = File.read(Rails.root.join('lib', 'seeds', 'region_seeds.csv'))
  # csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
  #
  # csv.each do |row|
  #   r = Region.new
  #   r.name = row['name']
  #   r.lat = row['lat']
  #   r.lng = row['lng']
  #   r.country_id = row['country_id']
  #   r.place_type_id = row['place_type_id']
  #   r.save
  # end

  # City Import
  # csv_text = File.read(Rails.root.join('lib', 'seeds', 'city_seeds.csv'))
  # csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
  #
  # csv.each do |row|
  #   c = City.new
  #   c.name = row['name']
  #   c.lat = row['lat']
  #   c.lng = row['lng']
  #   c.region_id = row['region_id']
  #   c.place_type_id = row['place_type_id']
  #   c.save
  # end


end

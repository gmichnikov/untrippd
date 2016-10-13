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


  # 10.times do
  #   f = Faker::Name.first_name
  #   l = Faker::Name.last_name
  #   u = f.downcase + "." + l.downcase
  #   User.create(username: u, password: f + "password", confirm_password: f + "password", email: "#{u}@example.org", first_name: f, last_name: l )
  # end


#
  # PlaceType.create!(name: 'country')
  # PlaceType.create!(name: 'region')
  # PlaceType.create!(name: 'city')
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


  #  author_id        :integer          not null
  #  body             :text             not null
  #  food             :boolean          default(FALSE)
  #  attraction       :boolean          default(FALSE)
  #  accommodation    :boolean          default(FALSE)
  #  highlight        :boolean          default(FALSE)
  #  suggestable_id   :integer
  #  suggestable_type :string

  # usa = Country.find(220)
  # mass = Region.find(1305)
  # oregon = Region.find(1567)
  # eugene = City.find(711)
  # hood_river = City.find(927)
  # portland = City.find(1829)
  # belmont = City.find(264)
  # boston = City.find(343)
  # brookline = City.find(371)
  #
  # 40.times do
  #   Suggestion.create(author_id: rand(3..10), body: Faker::Hipster.paragraph(2), food: [false, true].sample, attraction: [false, true].sample, accommodation: [false, true].sample, highlight: [false, true].sample, suggestable: [usa, mass, oregon, eugene, hood_river, portland, belmont, boston, brookline].sample)
  # end

  City.create(name: 'Hoboken', place_type_id: 3, lat: 40.744, lng: -74.032, region_id: 1448)
  City.create(name: 'Watkins Glen', place_type_id: 3, lat: 42.38, lng: -76.873, region_id: 1451)

  #  name          :string           not null
  #  lat           :float            not null
  #  lng           :float            not null
  #  place_type_id :integer          not null
  #  region_id     :integer          not null





end

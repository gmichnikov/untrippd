# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'user_seeds.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

csv.each do |row|
  u = User.new
  u.username = row['username']
  u.first_name = row['first_name']
  u.last_name = row['last_name']
  u.email = row['email']
  u.password = row['password']
  u.confirm_password = row['confirm_password']
  u.save
end

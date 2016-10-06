# == Schema Information
#
# Table name: countries
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  place_type_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Country < ActiveRecord::Base

  validates :name, :lat, :lng, :place_type_id, presence: true
  validates :name, uniqueness: true

  has_many :regions
  has_many :cities, through: :regions, source: :cities

end

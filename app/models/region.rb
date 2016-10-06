# == Schema Information
#
# Table name: regions
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  place_type_id :integer          not null
#  country_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Region < ActiveRecord::Base

  validates :name, :lat, :lng, :place_type_id, :country_id, presence: true

  belongs_to :country
  has_many :cities

end

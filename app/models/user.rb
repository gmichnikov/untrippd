# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password, :confirm_password

  VALID_USERNAME_REGEX = /\A[a-zA-Z0-9\.\-_]+\z/

  validates :username, presence: true, uniqueness: { case_sensitive: false }, format: { with: VALID_USERNAME_REGEX }
  validates :password_digest, :session_token, :first_name, :last_name, :email, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :passwords_must_match

  has_many :suggestions,
    foreign_key: :author_id

  def passwords_must_match
    errors.add(:confirm_password, 'must match password') unless password == confirm_password
  end

  after_initialize :ensure_session_token

  def full_name
    first_name[0].capitalize + first_name[1..-1] + " " + last_name[0].capitalize + last_name[1..-1]
    # first_name.titleize + " " + last_name.titleize
  end

  def display_name
    first_name[0].capitalize + first_name[1..-1] + " " + last_name[0].capitalize + "."
    # first_name.titleize + " " + last_name.titleize
  end

  # Auth methods

  def self.generate_session_token
    SecureRandom::base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      return nil
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def confirm_password=(cp)
    @confirm_password = cp
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

end

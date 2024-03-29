class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :listings,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: 'Listing'

  has_many :reservations,
  primary_key: :id,
  foreign_key: :reserver_id,
  class_name: 'Reservation'

  has_many :reviews,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :User


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end

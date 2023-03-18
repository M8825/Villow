# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#
class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token
  validates :password, length: { minimum: 6 }, allow_nil: true

  validates :email,
            format: {
              with: URI::MailTo::EMAIL_REGEXP,
              message: "Invalid email format"
            },
            uniqueness: true

  has_many :listings, class_name: :Listing, foreign_key: :owner_id

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    # has_secure_password enables the authenticate method
    if user&.authenticate(password)
      return user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    session_token
  end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end
end

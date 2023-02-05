class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token
  validates :password, length: { minimum: 6 }, allow_nil: true

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    # has_secure_password gives us the authenticate method

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

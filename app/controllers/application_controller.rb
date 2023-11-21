class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception
  before_action :snake_case_params, only: %i[create update]
  before_action :attach_authenticity_token

  def current_user
    Rails.logger.info "Session>>>>>>>>>:", session[:session_token].inspect
    Rails.logger.info "Look Up user based on the session_token: #{User.find_by(session_token: session[:session_token])}"
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    return if logged_in?

    render json: { errors: ['Must be logged in'] }, status: :unauthorized
  end

  def require_logged_out
    render json: { errors: ['Must be logged out'] }, status: 403 if logged_in?
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
    Rails.logger.info "Session: #{session.inspect}"
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end

  private

  def attach_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end
end

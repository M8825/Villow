class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception, unless: -> { action_name == 'create' && (controller_name == 'sessions' || controller_name == 'users') }
  before_action :attach_authenticity_token, :snake_case_params, only: %i[create update]

  def current_user
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

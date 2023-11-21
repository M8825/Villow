Rails.application.config.session_store :cookie_store,
  key: '_villow_session',
  domain: :all,
  secure: Rails.env.production?

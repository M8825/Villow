Rails.application.config.session_store :cookie_store, key: 'villow', domain: :all, tld_length: 2, secure: Rails.env.production?


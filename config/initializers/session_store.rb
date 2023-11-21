Rails.application.config.session_store :cookie_store, key: '_villow_session', domain: 'villow-fe.onrender.com', secure: Rails.env.production?


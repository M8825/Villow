# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins "http://localhost:3000/"

#     resource "*",
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    if Rails.env.production?
      origins "https://villow-fe.onrender.com"
    else
      origins "http://localhost:3000"
    end

    resource "*",
      headers: :any,
      methods: %i[get post put patch delete options head],
      expose: ['X-CSRF-Token'],
      credentials: true
  end
end

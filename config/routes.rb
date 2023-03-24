Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :listings, only: [:index] # Grab all listings for a user based on user id
      resources :favorites, only: %i[index create destroy] # Grab all favorites for a user based on user id
    end

    resources :listings, only: %i[index show create update destroy]

    resource :session, only: %i[create show destroy]
  end
end

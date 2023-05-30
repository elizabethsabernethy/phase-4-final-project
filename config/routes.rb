Rails.application.routes.draw do
  resources :artists, except: [:create, :show] do
    resources :paintings, only: [:index, :create, :destroy, :update]
  end
  resources :paintings, only: [:index]
  resources :museums do
    resources :paintings, only: [:index]
  end

post "/signup", to: "artists#create"
get "/me", to: "artists#show"
get "/profile", to: "artists#show"
get "/profile/:id/paintings", to: "paintings#show"
get "/artists/:id/paintings", to: "paintings#show"


#add get profile/:user_id/paintings route --> unsure how to get specific paintings from user and not all paintings


post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

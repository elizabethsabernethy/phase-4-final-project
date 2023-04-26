Rails.application.routes.draw do
  resources :artists do
    resources :paintings, only: [:index, :show]
    resources :museums, only: [:index]
  end
  resources :paintings
  resources :museums do
    resources :paintings, only: [:index, :show]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

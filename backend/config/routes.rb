Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/users', to: 'users#register'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'
  
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/users', to: 'users#register'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'

  # post '/forgot_password', to: 'password_resets#forgot_password'
  # get '/reset_password', to: 'password_resets#edit'
  # patch '/reset_password', to: 'password_resets#reser_password'

  post '/forgot_password', to: 'users#forgot_password'
  get '/reset_password', to: 'users#edit'
  patch '/reset_password', to: 'password_resets#reset_password'
end

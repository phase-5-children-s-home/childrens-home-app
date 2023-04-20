Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/users', to: 'users#register'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'

  # admin routes
  post '/make_admin', to: 'users#make_admin' # *
  delete '/remove_admin', to: 'users#remove_admin' 

  # post '/forgot_password', to: 'password_resets#forgot_password'
  # get '/reset_password', to: 'password_resets#edit'
  # patch '/reset_password', to: 'password_resets#reser_password'

  # post '/forgot_password', to: 'users#forgot_password'
  # get '/reset_password', to: 'users#edit'
  patch '/reset_password', to: 'password_resets#reset_password'
   #childrens home
   get '/search', to: 'home_details#search'
  resources :home_details, only: [:index, :create, :update, :destroy, :show]

  #donation routes 
  post '/donations', to: 'donations#create'

  #reviews routes
  resources :reviews, only: [:index, :create, :update, :destroy, :show]
  
  # visits routes
  resources :visits, only: [:create, :update, :destroy]
end

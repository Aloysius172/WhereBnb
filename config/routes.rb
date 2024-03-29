Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :show, :index, :destroy]
    resources :reservations, only: [:create, :show, :index, :update, :destroy]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
  end
  root to: "static_pages#root"
end

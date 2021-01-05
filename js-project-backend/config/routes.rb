Rails.application.routes.draw do
  resources :vendors
  resources :species
  resources :fish
  resources :buyers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

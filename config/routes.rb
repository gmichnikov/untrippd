Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'cities/popular' => 'cities#popular', as: :popular_cities
    resources :countries, only: [:show]
    resources :regions, only: [:show]
    resources :cities, only: [:show]
    resources :suggestions, only: [:create, :show, :index]
    resources :search, only: [:index]
    resources :users, constraints: { id: /[_\-\.A-Za-z0-9]+/ }, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    post 'users/:id/follow' => 'users#follow', as: :user_follow
    post 'users/:id/unfollow' => 'users#unfollow', as: :user_unfollow
    get 'search/:query' => 'search#filter', as: :search_filter
  end

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

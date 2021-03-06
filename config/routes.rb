Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  
  get 'sessions/create'
  get 'sessions/destroy'
  get 'home/show'

	# Profiles
  get 'profile/show'
  post 'profile/tag', to: 'tag#add'
  post 'profile/link', to: 'link#add'

	# Links
  get 'link/listTypes', to: 'link#listTypes'
  
  root to: "home#show"

end

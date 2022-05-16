Rails.application.routes.draw do
  resources :todos 
  get '/completed_todos', to: "todos#completed_todos"
  get '/uncompleted_todos', to: "todos#uncompleted_todos"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy, :toggle_update]

  # GET /todos
  def index
    @todos = Todo.all
    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(is_completed: params[:todo][:is_completed])
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  def completed_todos
    @todos = Todo.where(is_completed: true)
    render json: @todos
  end

  def uncompleted_todos
    @todos = Todo.where(is_completed: false)
    render json: @todos
  end

  def toggle_update 
    binding.pry
    if @todo.update(is_completed: !@todo.is_completed)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:title, :body, :is_completed)
    end
end

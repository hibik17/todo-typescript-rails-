class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :body
      t.boolean :is_completed, default: false

      t.timestamps
    end
  end
end

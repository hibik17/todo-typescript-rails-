class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :is_completed, default: false

      t.timestamps
    end
  end
end

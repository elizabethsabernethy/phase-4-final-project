class CreateMuseums < ActiveRecord::Migration[6.1]
  def change
    create_table :museums do |t|
      t.string :name
      t.string :img_url
      t.string :location
      t.timestamps
    end
  end
end

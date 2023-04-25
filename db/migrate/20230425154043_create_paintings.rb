class CreatePaintings < ActiveRecord::Migration[6.1]
  def change
    create_table :paintings do |t|
      t.string :title
      t.string :img_url
      t.string :description
      t.integer :artist_id
      t.integer :museum_id
      t.timestamps
    end
  end
end

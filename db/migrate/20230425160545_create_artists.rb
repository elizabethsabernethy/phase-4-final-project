class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.timestamps
    end
  end
end

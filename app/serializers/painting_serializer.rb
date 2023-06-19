class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url, :museum_id, :artist_id
  belongs_to :artist
  belongs_to :museum
end

class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img_url, :artist_id, :museum_id
end

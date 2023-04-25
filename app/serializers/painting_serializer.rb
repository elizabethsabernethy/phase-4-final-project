class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url, :artist_id, :museum_id
end

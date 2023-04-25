class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url
  belongs_to :artist
  belongs_to :museum
end

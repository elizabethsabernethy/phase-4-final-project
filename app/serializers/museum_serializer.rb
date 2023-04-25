class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :location
  has_many :paintings
  has_many :artists, through: :paintings
end

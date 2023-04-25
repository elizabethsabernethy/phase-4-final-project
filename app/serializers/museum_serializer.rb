class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :paintings
  has_many :artists, through: :paintings
end

class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :username, :name
  has_many :paintings
  has_many :museums, through: :paintings
end

class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :uniqueMuseums
  has_many :paintings
  has_many :museums, through: :paintings

  def uniqueMuseums
    object.museums.uniq.map{|museum| 
    {id: museum.id, name: museum.name}
  }
  end
end

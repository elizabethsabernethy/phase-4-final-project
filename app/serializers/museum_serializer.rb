class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :location, :uniqueArtists
  has_many :paintings
  has_many :artists, through: :paintings

  def uniqueArtists
    object.artists.uniq.map{|artist| 
    {id: artist.id, name: artist.name, username: artist.username}
  }
  end
end
class Museum < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :artists, -> { distinct }, through: :paintings
    validates :name, presence: true, uniqueness: true
    validates :img_url, presence: true
    validates :location, presence: true

    # def uniqueArtists 
    #     self.artists.uniq
    # end

end

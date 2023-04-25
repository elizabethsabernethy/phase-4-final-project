class Artist < ApplicationRecord
    has_many :paintings 
    has_many :museums, through: :paintings 
    validates :username, presence: true, uniqueness: true
end

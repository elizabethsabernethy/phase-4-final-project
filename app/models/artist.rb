class Artist < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :museums, through: :paintings 
    validates :username, presence: true, uniqueness: true
end

class Painting < ApplicationRecord
    belongs_to :museum
    belongs_to :artist 
    validates :title, presence: true, uniqueness: true
    validates :img_url, presence: true
    validates :description, presence: true
end

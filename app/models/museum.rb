class Museum < ApplicationRecord
    # has_many :paintings
    # has_many :artists, through: :paintings
    validates :name, presence: true, uniqueness: true
end

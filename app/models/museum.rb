class Museum < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :artists, through: :paintings
    validates :name, presence: true, uniqueness: true
end

class Museum < ApplicationRecord
    has_many :paintings
    has_many :collectors, through: :paintings
    validates :name, presence: true, uniqueness: true
end

class Artist < ApplicationRecord
    has_secure_password
    has_many :paintings, dependent: :destroy
    has_many :museums, through: :paintings 
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password_digest, presence: true
end

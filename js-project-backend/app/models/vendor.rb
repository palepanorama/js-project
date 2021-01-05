class Vendor < ApplicationRecord
    has_many :fish 
    has_many :buyers, through: :fish 
end

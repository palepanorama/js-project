class Fish < ApplicationRecord
    belongs_to :buyer 
    belongs_to :vendor 
    belongs_to :species 
end

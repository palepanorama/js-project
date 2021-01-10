class Fish < ApplicationRecord
    belongs_to :buyer 
    belongs_to :vendor 
end

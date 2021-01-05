class Fish < ApplicationRecord
    belongs_to :user 
    belongs_to :vendor 
    belongs_to :species 

end

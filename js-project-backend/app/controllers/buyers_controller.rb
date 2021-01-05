class BuyersController < ApplicationController
    has_many :fish 
    has_many :vendors, through: :fish 
end

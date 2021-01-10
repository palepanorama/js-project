class BuyersController < ApplicationController

    def index
        @buyers = Buyer.all
        render json: @buyers
    end

    def show 
        render json: @buyer 
    end 

    def create
        @buyer = Buyer.create_or_find_by(buyer_params)

        if @buyer.save
        render json: @buyer, status: :created, location: @buyer
        else
        render json: @buyer.errors, status: :unprocessable_entity
        end
    end

    private
    def buyer_params
      params.require(:buyer).permit(:name)
    end
end

class BuyersController < ApplicationController

    def index
        buyers = Buyer.all
        render json: buyers
    end

    def show 
        buyer = Buyer.find_by(id: params[:id])
        render json: buyer 
    end 

    def create
        @buyer = Buyer.create_or_find_by(buyer_params)

        if @buyer.save
        render json: @buyer, status: :created, location: @buyer
        else
        render json: @buyer.errors, status: :unprocessable_entity
        end
    end

    def destroy 
        @buyer = Buyer.find_by(id: params[:id])
        @buyer.destroy 
    end 

    private
    def buyer_params
      params.require(:buyer).permit(:name, :email)
    end
end

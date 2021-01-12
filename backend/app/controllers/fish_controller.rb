class FishController < ApplicationController
    def index 
        fish = Fish.all
        render json: fish 
    end 

    def create
        fish = Fish.new(fish_params)

        fish.save
        render json: fish, status: :created, location: fish
    end

    def show 
        fish = Fish.find_by(id: params[:id])
        render json: fish 
    end 
    
    private 
    def fish_params
        params.require(:fish).permit(:name, :buyer_id, :price)
    end 
end

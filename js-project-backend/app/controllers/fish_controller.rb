class FishController < ApplicationController
    def index 
        fish = Fish.all 
        render json: fish 
    end 

    def show 
        fish = Fish.find_by(id: params[:id])
        render json: fish 
    end 
end

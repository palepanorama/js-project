class FishController < ApplicationController


    def index 
        @fish = Fish.all
        render json: @fish 
    end 

    def create
        @fish = Fish.create_or_find_by(fish_params)

        if @fish.save
            render json: @fish, status: :created, location: @fish
        else
            render json: @fish.errors, status: :unprocessable_entity
        end
    end

    def show 
        @fish = Fish.find_by(id: params[:id])
        render json: @fish 
    end 

    def destroy
       @fish = Fish.find_by(id: params[:id])
       @fish.destroy 
    end
    
    
    private 
    def fish_params
        params.require(:fish).permit(:name, :id, :buyer_id, :price)
    end 

end

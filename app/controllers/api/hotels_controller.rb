class Api::HotelsController < ApplicationController
    def index
        @hotels = Hotel.all
        render :index
    end

    def show
        @hotel = Hotel.find_by(id: params[:id])
        render :show
    end

    private
    def hotel_params
        # only searchable by name, country, city
        params.require(:hotel).permit(:name, :country, :city)
    end
end
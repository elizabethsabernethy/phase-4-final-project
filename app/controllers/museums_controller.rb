class MuseumsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

before_action :authorize, only: [:create]  

    def index
        museums = Museum.all.order(name: :asc)
        render json: museums
    end

    def show
        museum = Museum.find(params[:id])
        render json: museum
    end

    def create
        museum = Museum.create!(museum_params)
        render json: museum, status: :created
    end

    def update
        museum = Museum.find(params[:id])
        museum.update!(museum_params)
        render json: museum, status: :updated
    end

    def destroy
        museum = Museum.find(params[:id])
        museum.destroy
        head :no_content
    end

    private

    def museum_params
        params.permit(:name, :img_url, :location)
    end

    def render_not_found_response
        render json: { error: "Museum not found" }, status: :not_found
      end

end

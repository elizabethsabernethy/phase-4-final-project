class PaintingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

before_action :authorize, only: [:create, :update, :destroy]  


    def index
        if params[:museum_id]
            museum = Museum.find(params[:museum_id])
            paintings = museum.paintings
          else
            paintings = Painting.all.order(title: :asc)
          end
        render json: paintings
    end

    def show
        painting = Painting.find(params[:id])
        render json: painting
    end

    def create
        artist = Artist.find_by(id: session[:user_id])
        painting = Painting.create!(painting_params)
        render json: painting, status: :created
    end
    
    def update
        painting = Artist.find_by(id: session[:user_id]).paintings.find(params[:id])
        painting.update!(painting_params)
        render json: painting, status: :accepted
    end

    def destroy
        painting = Artist.find_by(id: session[:user_id]).paintings.find(params[:id])
        painting.destroy
        head :no_content
    end

    private

    def painting_params
        params.permit(:title, :img_url, :description, :artist_id, :museum_id, :id)
    end

    def render_not_found_response
        render json: { error: "Painting not found" }, status: :not_found
      end

end

class PaintingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response


    def index
        if params[:museum_id]
            museum = Museum.find(params[:museum_id])
            paintings = museum.paintings
          else
            paintings = Painting.all.order(title: :asc)
          end
        render json: paintings, include: [:museum, :artist]
    end

    def show
        painting = Painting.find(params[:id])
        render json: painting, include: [:museum, :artist]
    end

    def create
        painting = Painting.create!(painting_params)
        render json: painting, include: [:museum, :artist], status: :created
    end
    
    def update
        painting = Painting.find(params[:id])
        painting.update!(painting_params)
        render json: painting, include: [:museum, :artist], status: :updated
    end

    def destroy
        painting = Painting.find(params[:id])
        painting.destroy
        head :no_content
    end

    private

    def painting_params
        params.permit(:title, :img_url, :description, :artist_id, :museum_id)
    end

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Painting not found" }, status: :not_found
      end
end

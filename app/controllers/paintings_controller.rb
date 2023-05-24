class PaintingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

before_action :authorize, only: [:show]  


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
        painting = Painting.create!(painting_params)
        render json: painting, status: :created
    end
    
    def update
        painting = Painting.find(params[:id])
        painting.update!(painting_params)
        render json: painting, status: :updated
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

      def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

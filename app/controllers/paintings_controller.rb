class PaintingsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response


    def index
        paintings = Painting.all.order(name: :asc)
        render json: paintings
    end

    def show
        painting = Painting.find(params[:id])
        render json: painting
    end

    def create
        painting = painting.create!(painting_params)
        render json: painting, status: :created
    end

    private

    def painting_params
        params.permit(:title, :img_url, :description)
    end

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Painting not found" }, status: :not_found
      end
end
class MuseumsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    def index
    end

    def show
    end

    def create
        museum = Museum.create!(museum_params)
        render json: museum, status: :created
    end

    private

    def museum_params
        params.permit(:name)
    end

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Museum not found" }, status: :not_found
      end
end

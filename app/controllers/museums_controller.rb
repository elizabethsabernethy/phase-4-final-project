class MuseumsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    private

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Museum not found" }, status: :not_found
      end
end

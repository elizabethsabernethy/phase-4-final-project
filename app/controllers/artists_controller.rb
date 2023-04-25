class ArtistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response


    def index
        artists = Artist.all.order(name: :asc)
        render json: artists, include: :paintings
    end

    def show
        artist = Artist.find(params[:id])
        render json: artist, include: :paintings
    end

    def create
        artist = Artist.create!(artist_params)
        render json: artist, include: :paintings, status: :created
    end

    private

    def artist_params
        params.permit(:name, :username, :password_digest)
    end

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Artist not found" }, status: :not_found
      end
end

end

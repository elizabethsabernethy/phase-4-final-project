class ArtistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    before_action :authorize, only: [:show]   

    def index
        artists = Artist.all.order(name: :asc)
        render json: artists, include: [:paintings, :museums]
    end

    def show
        artist = Artist.find_by(id: session[:user_id])
        render json: artist, include: [:paintings, :museums]
    end

    def create
        user = Artist.create(artist_params)
        if user.valid?
            session[:user_id] = user.id
        render json: artist, include: [:paintings, :museums], status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        artist = Artist.find(params[:id])
        artist.update!(artist_params)
        render json: artist, include: [:paintings, :museums], status: :updated
    end

    def destroy
        artist = Artist.find(params[:id])
        artist.destroy
        head :no_content
    end

    private

    def artist_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

    def render_invalid_response(invalid)
        render json: { error: invalid.record.errors.messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Artist not found" }, status: :not_found
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

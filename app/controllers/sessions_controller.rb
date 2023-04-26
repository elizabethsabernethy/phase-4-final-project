class SessionsController < ApplicationController

    def create
        user = Artist.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def destroy
        user = Artist.find_by(username: params[:username])
        session[:user_id] = nil
        if user
        user.destroy
        head :no_content
        else
            render json: { error: "No content" }, status: :no_content
      end
end

end
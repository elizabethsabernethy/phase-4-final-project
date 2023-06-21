class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def render_invalid_response(invalid)
    render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end

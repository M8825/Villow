class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ["password"]

  before_action :require_logged_out, only: [:create]

  def create
    # {credential: "username@gmail.com", :password=>"password" }
    if (user_params.credentials.include?("@"))
      @user =
        User.new(email: user_params.credential, password: user_params.password)
    else
      @user =
        User.new(email: user_params.credential, password: user_params.password)
    end
    debugger

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    # params.require(:user).permit(:username, :password)
    params.require(:user).permit(:credential, :password)
  end
end

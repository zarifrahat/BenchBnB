class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login(@user)
            render json: @user
        else
            render json: ["Invalid username/password combination"], status: 401
        end

    end

    def destroy
        logout
        render json: {}
    end
end

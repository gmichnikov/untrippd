class Api::RegionsController < ApplicationController

    def show
      @region = Region.find(params[:id])
      render :show
    end

end

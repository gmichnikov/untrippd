class Api::RegionsController < ApplicationController

    def show
      @region = Region.find(params[:id])
      @suggestions = @region.all_suggestions.order(created_at: :desc).includes(:author, :suggestable)
      render :show
    end

end

class ProfileController < ApplicationController
  def show
  end

  def addTag

  	tag = params[:tag]
  	render :json => {tag: tag}

  end

end

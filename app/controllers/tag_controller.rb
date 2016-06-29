class TagController < ApplicationController

  def add

  	tag = params[:tag]
  	render :json => {tag: tag}

  end

end

class LinkController < ApplicationController

  def add

  	link = params[:url]
  	render :json => {link: link}

  end

end

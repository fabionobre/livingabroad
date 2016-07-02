class LinkController < ApplicationController

  def add
  	link = params[:url]
  	render :json => {link: link}
  end

  def listTypes
  	links = LinkType.all
  	render :json => {data: links}
  end

end

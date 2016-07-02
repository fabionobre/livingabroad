class SeedLinkTypes < ActiveRecord::Migration
  def change

  	link = LinkType.new
  	link.description = 'Facebook'
  	link.name = 'facebook'
  	link.save

  	link = LinkType.new
  	link.description = 'Instagram'
  	link.name = 'instagram'
  	link.save

  	link = LinkType.new
  	link.description = 'Snapchat'
  	link.name = 'snapchat'
  	link.save

  	link = LinkType.new
  	link.description = 'Whatsapp'
  	link.name = 'whatsapp'
  	link.save

  	link = LinkType.new
  	link.description = 'Pinterest'
  	link.name = 'pinterest'
  	link.save

  	link = LinkType.new
  	link.description = 'Linkedin'
  	link.name = 'linkedin'
	link.save

  end
end

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
	provider :facebook, ENV['FACEBOOK_APP_KEY'], ENV['FACEBOOK_APP_SECRET'], 
		:scope => "public_profile, email", info_fields: 'id,name,link,email', 
		image_size: 'normal'
end

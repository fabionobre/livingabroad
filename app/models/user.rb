class User < ActiveRecord::Base

	# Used to connect and login with Facebook Account
	def self.from_omniauth(auth)

    where(uid: auth.uid, provider: auth.provider).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.email = auth.info.email
      user.photo_url = auth.info.image
      user.save!
    end
  end
end

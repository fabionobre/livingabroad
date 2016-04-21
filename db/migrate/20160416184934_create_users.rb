class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :oauth_token
      t.datetime :oauth_expires_at
      t.string :uid
      t.string :photo_url
      t.string :provider
      t.text :resume
      t.boolean :visibility_id

      t.timestamps null: false
    end
  end
end
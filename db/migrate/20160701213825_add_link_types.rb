class AddLinkTypes < ActiveRecord::Migration
  def change
    create_table :link_types do |t|
      t.string :description
      t.string :name
    end
  end
end

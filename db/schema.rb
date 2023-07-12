# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_07_12_230542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.boolean "reserved_status", default: false, null: false
    t.integer "owner_id", null: false
    t.text "description", null: false
    t.float "price", null: false
    t.integer "rooms", null: false
    t.integer "beds", null: false
    t.integer "bathrooms", null: false
    t.string "property_type", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_listings_on_owner_id"
    t.index ["title"], name: "index_listings_on_title"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "reserver_id", null: false
    t.date "reservation_start", null: false
    t.date "reservation_end", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
    t.index ["reservation_end"], name: "index_reservations_on_reservation_end"
    t.index ["reservation_start"], name: "index_reservations_on_reservation_start"
    t.index ["reserver_id"], name: "index_reservations_on_reserver_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.float "rating", null: false
    t.integer "reviewer_id", null: false
    t.integer "reviewed_listing_id", null: false
    t.integer "cleanliness", null: false
    t.integer "communication", null: false
    t.integer "check_in", null: false
    t.integer "accuracy", null: false
    t.integer "location", null: false
    t.integer "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reviewed_listing_id"], name: "index_reviews_on_reviewed_listing_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

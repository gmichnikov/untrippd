# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20161006160424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name",          null: false
    t.float    "lat",           null: false
    t.float    "lng",           null: false
    t.integer  "place_type_id", null: false
    t.integer  "region_id",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "cities", ["name"], name: "index_cities_on_name", using: :btree
  add_index "cities", ["place_type_id"], name: "index_cities_on_place_type_id", using: :btree
  add_index "cities", ["region_id"], name: "index_cities_on_region_id", using: :btree

  create_table "countries", force: :cascade do |t|
    t.string   "name",          null: false
    t.float    "lat",           null: false
    t.float    "lng",           null: false
    t.integer  "place_type_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "countries", ["name"], name: "index_countries_on_name", using: :btree
  add_index "countries", ["place_type_id"], name: "index_countries_on_place_type_id", using: :btree

  create_table "place_types", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string   "name",          null: false
    t.float    "lat",           null: false
    t.float    "lng",           null: false
    t.integer  "place_type_id", null: false
    t.integer  "country_id",    null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "regions", ["country_id"], name: "index_regions_on_country_id", using: :btree
  add_index "regions", ["name"], name: "index_regions_on_name", using: :btree
  add_index "regions", ["place_type_id"], name: "index_regions_on_place_type_id", using: :btree

  create_table "suggestions", force: :cascade do |t|
    t.integer  "author_id",                        null: false
    t.text     "body",                             null: false
    t.boolean  "food",             default: false
    t.boolean  "attraction",       default: false
    t.boolean  "accommodation",    default: false
    t.boolean  "highlight",        default: false
    t.integer  "suggestable_id"
    t.string   "suggestable_type"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "suggestions", ["suggestable_type", "suggestable_id"], name: "index_suggestions_on_suggestable_type_and_suggestable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

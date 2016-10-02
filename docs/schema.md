# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## place_types
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## places
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, unique (?)
place_type_id   | integer   | not null, foreign key (references place_types)
parent_place_id | integer   | not null, foreign key (references this same table's id), indexed
latitude        | decimal   | possible map display on show page?
longitude       | decimal   | possible map display on show page?
map_zoom        | integer   | possible map display on show page?

## suggestions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
place_id    | integer   | not null, foreign key (references places), indexed
food        | boolean   | not null, default false
attraction  | boolean   | not null, default false
highlight   | boolean   | not null, default false
image_url   | string    | (optional, tbd)

## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [followed_id]
followed_id | integer   | not null, foreign key (references users), indexed

## place_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [place_id]
place_id    | integer   | not null, foreign key (references places), indexed

## guidebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
name        | string    | not null

## guidebook_entries
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
guidebook_id  | integer   | not null, foreign key (references guidebooks), indexed
suggestion_id | integer   | not null, foreign key (references suggestions), indexed, unique [guidebook_id]

DROP TABLE IF EXISTS playlist CASCADE;

CREATE TABLE playlist (
    id serial primary key,
    name varchar,
    artist varchar,
    album varchar
);
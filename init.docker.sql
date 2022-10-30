create database "note_taker";
create table "notes" (
    id serial primary key,
    title varchar,
    content varchar
);
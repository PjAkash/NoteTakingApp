create database "note_taker";
create table "notes" (
    id serial primary key,
    title varchar,
    content varchar,
    removed boolean DEFAULT FALSE NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone DEFAULT NOW() NOT NULL
);
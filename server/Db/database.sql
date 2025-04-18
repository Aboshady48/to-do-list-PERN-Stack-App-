CREATE DATABASE pern_todo_list_db;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255), 
    completed BOOLEAN
);

INSERT INTO todo (title, description, completed) VALUES ('Test', 'Test', false);

INSERT INTO todo (title, description, completed) VALUES ('Test2', 'Test2', false);

SELECT * FROM todo;

use localDB;

CREATE TABLE Todos (
    id VARCHAR(36),
    message VARCHAR(255),
    complete BOOLEAN,
    created_at datetime DEFAULT UTC_TIMESTAMP,
    updated_at datetime DEFAULT UTC_TIMESTAMP
    PRIMARY KEY (id)
);

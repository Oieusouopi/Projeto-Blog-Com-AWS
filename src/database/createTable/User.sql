USE blog_db;

CREATE TABLE users (
    id PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    nickName VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    admin BIT NOT NULL,
);
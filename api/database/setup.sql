DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS token;
-- make, model, price, year, colour
CREATE TABLLE car (
    car_id INT GENERATED ALWAYS AS IDENTITY,
    make VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    year INT NOT NULL,
    colour VARCHAR(30) NOT NULL,
    PRIMARY KEY (car_id)
)

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);
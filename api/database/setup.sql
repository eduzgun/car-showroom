DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS token;

CREATE TABLE car (
    car_id INT GENERATED ALWAYS AS IDENTITY,
    make VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    year INT NOT NULL,
    colour VARCHAR(30) NOT NULL,
    PRIMARY KEY (car_id)
);

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


INSERT INTO car (make, model, price, year, colour)
VALUES
    ('Tesla', 'Model S', 85000, 2022, 'Midnight Silver'),
    ('Toyota', 'Corolla', 20000, 2022, 'Blue'),
    ('Aston Martin', 'DB11', 200000, 2022, ' Onyx Black'),
    ('Honda', 'Civic', 22000, 2023, 'Red'),
    ('BMW', '7 Series', 88000, 2023, 'Black'),
    ('Lotus', 'Evija', 2000000, 2023, 'Solaris Yellow'),
    ('Jaguar', 'XJ', 92000, 2023, 'Red'),
    ('Tesla', 'Model X', 85000, 2023, 'Midnight Silver'),
    ('BMW', 'E36 M3', 25000, 1992, 'Alpine White')

DROP TABLE IF EXISTS child CASCADE;
DROP TABLE IF EXISTS go CASCADE;
DROP TABLE IF EXISTS eat CASCADE;
DROP TABLE IF EXISTS sleep CASCADE;



CREATE TABLE child (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest VARCHAR(255) NOT NULL,
  kid_name VARCHAR(255) NOT NULL
);

CREATE TABLE go(
id SERIAL PRIMARY KEY,
day VARCHAR(10) NOT NULL,
go_time VARCHAR(10) NOT NULL,
pee boolean,
poo boolean,
poo_descr VARCHAR(25),
child_id INTEGER,
FOREIGN KEY (child_id) REFERENCES child (id)
);

CREATE TABLE eat(
id SERIAL PRIMARY KEY,
day VARCHAR(10) NOT NULL,
eat_time VARCHAR(10) NOT NULL,
formula INTEGER NOT NULL,
milk INTEGER NOT NULL,
left_milk boolean,
right_milk boolean,
child_id INTEGER,
FOREIGN KEY (child_id) REFERENCES child (id)
);

CREATE TABLE sleep(
id SERIAL PRIMARY KEY,
day VARCHAR(10) NOT NULL,
sleep_start VARCHAR(10) NOT NULL,
sleep_end VARCHAR(10) NOT NULL,
child_id INTEGER,
FOREIGN KEY (child_id) REFERENCES child (id)
);


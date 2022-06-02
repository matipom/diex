-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


CREATE TABLE items(
 items_id SERIAL PRIMARY KEY,
 items_name VARCHAR (50) NOT NULL,
 amount INTEGER NOT NULL
)
CREATE TABLE customers(
 customers_id SERIAL PRIMARY KEY,
 f_name VARCHAR (50) NOT NULL,
 l_name VARCHAR (50) NOT NULL
)

INSERT INTO customers (f_name, l_name)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson')
INSERT INTO items (items_name, amount)
VALUES
    ('Small desk', 100),
    ('Long desk', 300),
	('Fan', 80)
	

SELECT * FROM items
SELECT items_name FROM items WHERE amount>80
SELECT items_name FROM items WHERE amount<=300

SELECT * FROM customers
SELECT f_name, l_name FROM customers WHERE l_name = 'Smith'
SELECT f_name, l_name FROM customers WHERE l_name = 'Jones'
SELECT f_name, l_name FROM customers WHERE f_name != 'Scott'


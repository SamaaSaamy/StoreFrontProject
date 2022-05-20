CREATE TABLE book (id SERIAL PRIMARY KEY, name VARCHAR(150), author_name VARCHAR(150), pagesNumber INTEGER, price INTEGER);
CREATE TABLE customer (id SERIAL PRIMARY KEY, firstName VARCHAR(150), lastName VARCHAR(150), password text);
CREATE TABLE customerOrder (id SERIAL PRIMARY KEY, status text, quantity INTEGER);

ALTER TABLE customerOrder ADD COLUMN customer_id INTEGER REFERENCES customer (id);

ALTER TABLE customerOrder ADD COLUMN book_id INTEGER REFERENCES book (id);

-- CREATE TABLE book (id SERIAL PRIMARY  KEY, name VARCHAR(150), author_name VARCHAR(150), pagesNumber INTEGER, price INTEGER);
-- CREATE TABLE customer (id SERIAL PRIMARY KEY,firstName VARCHAR(150),lastName  VARCHAR(150),password TEXT);
-- CREATE TABLE customerorder (id SERIAL PRIMARY KEY,status TEXT,quantity  INTEGER, book_id INTEGER REFERENCES book (id), orders_id INTEGER REFERENCES orders (id));

-- CREATE TABLE orders (id SERIAL PRIMARY KEY, orderstatus TEXT, customer_id INTEGER REFERENCES customer (id));
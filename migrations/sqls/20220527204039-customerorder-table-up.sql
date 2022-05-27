CREATE TABLE customerorder(id SERIAL PRIMARY KEY,status TEXT,quantity  INTEGER, customer_id INTEGER REFERENCES customer (id), book_id INTEGER REFERENCES book (id)
);
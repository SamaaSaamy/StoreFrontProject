CREATE TABLE customerorder(
  id SERIAL PRIMARY KEY,
  status TEXT,
  quantity  INTEGER,
  customer_id  REFERENCES customer(id) INTEGER,
  book_id REFERENCES book(id) INTEGER,
);
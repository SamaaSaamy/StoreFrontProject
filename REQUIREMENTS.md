# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### book
- Index 
GET 
http://localhost:3000/book/index
response [
    {
        "id": 1,
        "name": "book1",
        "author_name": "name1",
        "pagesnumber": 100,
        "price": 100
    },
    {
        "id": 3,
        "name": "book name1",
        "author_name": "author_name1",
        "pagesnumber": 200,
        "price": 40
    },
    {
        "id": 2,
        "name": "book name",
        "author_name": "author_name",
        "pagesnumber": 200,
        "price": 50
    }
]
========================================================================
- Show
GET
http://localhost:3000/book/show/3
3 is the book id
response :{
    "id": 3,
    "name": "book name1",
    "author_name": "author_name1",
    "pagesnumber": 200,
    "price": 40
}
======================================================================
- Create [token required]
POST
http://localhost:3000/book/create
body:     "book": {"name": "book name1", "author_name": "author_name1", "pagesNumber": 200, "price": 40}
response: {
    "id": 3,
    "name": "book name1",
    "author_name": "author_name1",
    "pagesnumber": 200,
    "price": 40
}
=====================================================================

#### customer
- Index [token required]
GET
http://localhost:3000/customer/index
response: [
    {
        "id": 2,
        "firstname": "customer first name",
        "lastname": "customer last name",
        "password": "$2b$10$YCnNm/56IX9JSEs9QBsWne72Yi6noVTS2o5qcb/CZhakVc5pcVwOS"
    }
]
===================================================================
- Show [token required]
GET
http://localhost:3000/customer/show/2
2 is customer id
response: {
    "id": 2,
    "firstname": "customer first name",
    "lastname": "customer last name",
    "password": "$2b$10$YCnNm/56IX9JSEs9QBsWne72Yi6noVTS2o5qcb/CZhakVc5pcVwOS"
}
==================================================================
- Create N[token required]
POST
http://localhost:3000/customer/create
body : {
    "customer": {"firstName": "customer first name", "lastName": "customer last name", "password": "12345678"}
}
response: {
    "id": 2,
    "firstname": "customer first name",
    "lastname": "customer last name",
    "password": "$2b$10$YCnNm/56IX9JSEs9QBsWne72Yi6noVTS2o5qcb/CZhakVc5pcVwOS"
}
===================================================================

#### Orders
- Current Order by user (args: user id)[token required]
GET
http://localhost:3000/customerOrders/currentOrder/1
1 is customer id
response: {
    "id": 1,
    "status": "active",
    "quantity": 1,
    "customer_id": 1,
    "book_id": 1
}
===================================================================

## Data Shapes
#### book
CREATE TABLE book (id SERIAL PRIMARY  KEY, name VARCHAR(150), author_name VARCHAR(150), pagesNumber INTEGER, price INTEGER);

#### customer
CREATE TABLE customer (id SERIAL PRIMARY KEY,firstName VARCHAR(150),lastName  VARCHAR(150),password TEXT);

#### customerorder
CREATE TABLE customerorder(id SERIAL PRIMARY KEY,status TEXT,quantity  INTEGER, customer_id INTEGER REFERENCES customer (id), book_id INTEGER REFERENCES book (id)
);






}

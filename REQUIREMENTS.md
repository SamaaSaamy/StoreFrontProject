# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

=======my .env
POSTGRES_HOST="localhost"
POSTGRES_DB=book_store
POSTGRES_TEST_DB=book_store_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=adminpassword

ENV=dev
BCRYPT_PASSWORD=store-front-udacity-project
SALT_ROUNDS=10

TOKEN_SECRET=any_string
========== end points : provided in post man collection






export type book = {
    id?: number;
    name: string;
    author_name: string;
    pagesNumber: number;
    price: number
}

export type customer = {
    id?: number;
    firstName: string;
    lastName: string;
    password: Text;
}
export type customerOrder = {
    id?: number;
    status: string | "active";
    quantity: number;
    customer_id: number,
    book_id: number
}
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need the following modules and dependencies installed to run this project:

docker-compose   # To run the Postgres database on Docker
npm run dev          # To run the application
npm             # For dependency management

1- Installing node moudules and dependecies
npm i 

2- First, create a .env file with all the required environment variables:

# .env
POSTGRES_HOST="localhost"
POSTGRES_DB=book_store
POSTGRES_TEST_DB=book_store_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=adminpassword

ENV=dev
BCRYPT_PASSWORD=store-front-udacity-project
SALT_ROUNDS=10

TOKEN_SECRET=any_string

# Login to Postgres
psql -U postgres

# Postgres shell
# This will list out all the databases
\l

# If "book_store" database is not present
create database book_store; 

Next, you need to run the database migrations:

npm migrations up.... db-migrate up
Running the application
Use the following command to run the application in watch mode:

npm run watch
Use the following command to run the application in using node:

npm run start
The application will run on http://localhost:3000/.

Running the unit tests
Use the following command to run the unit tests:

npm run test

Built With
NodeJS - The JavaScript runtime
npm - The dependency manager
db-migrate - The database migration tool
Express - The web framework
TypeScript - Types JS extension
Jasmine - The unit testing framework

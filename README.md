# MELI Search Results API Bridge built with NodeJS and Express

This project was built to practice nodejs with express.

## Packages used

- typescript (version 4)
- axios (to fetch MELI APIs)
- cors (to allow CORS)
- compress (to compress our build files)
- eslint (code pattern)
- express (NodeJS Framework)
- nodemon (to watch our changes)

## Frontend

The frontend was built in React 18 with Typescript 4.

[https://github.com/wesleyr6/search-results-meli](https://github.com/wesleyr6/search-results-meli)

## Demo

### GET /items?q=Apple

Endpoint used to search a list of products

Method: GET

```
Params: {
    q: 'Apple'
}
```

[https://meli-express-api.herokuapp.com/api/items?q=Apple](https://meli-express-api.herokuapp.com/api/items?q=Apple)

### GET /items/:id

Endpoint used to get a product detail by a product ID

Method: GET

[https://meli-express-api.herokuapp.com/api/items/MLA931737710](https://meli-express-api.herokuapp.com/api/items/MLA931737710)

## How to run the project

First of all, you need to configure your environment variables creating a `.env` file at the root of the project

### Environment Variables

```
MELI_API=https://api.mercadolibre.com
PORT=8080
```

### Install the dependecies packages

After configured your environment variables you will need to install the dependecies packages running `yarn`.

### Run the Project

After that, using another tab in your terminal, you can start the project running `yarn run dev`.

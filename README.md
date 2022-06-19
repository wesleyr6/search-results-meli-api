<h1 align="center">MELI Search Results API Bridge built with NodeJS and Express</h1>

<p align="center">
  <a href="https://dashboard.heroku.com/pipelines/f49b1115-11b2-4dae-8494-5fc61d937d9c/tests" target="_blank">
    <img src="https://meli-react-badge.herokuapp.com/last.svg" />
  </a>
  <a href="https://meli-express-api-dev.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-development-red" />
  </a>
  <a href="https://meli-express-api.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-production-purple" />
  </a>
</p>

This project was built to practice nodejs with express.

## Requirements

- node 16.X
- npm 7
- vscode (include extensions)

### VSCode Extensions

- ESLint
- Prettier

## Packages used

- typescript (version 4)
- axios (to fetch MELI APIs)
- cors (to allow CORS)
- compress (to compress our build files)
- eslint (code pattern)
- express (NodeJS Framework)
- nodemon (to watch our changes)
- dotenv (to use env vars)

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

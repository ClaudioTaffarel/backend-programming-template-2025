const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  // buat pake paramm
  route.get('/', booksController.getBooks);

};

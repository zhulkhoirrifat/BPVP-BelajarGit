const express = require('express');
const { createCategory } = require('../controllers/categoryController');
const categoryRouter = express.Router()

categoryRouter.post("/category", createCategory)

// define the home page route
categoryRouter.get('/movie', (req, res) => {
  res.send('Birds home page')
});


module.exports = categoryRouter

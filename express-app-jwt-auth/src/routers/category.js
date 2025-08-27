const express = require('express');
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController');
const categoryRouter = express.Router()

categoryRouter.post("/category", createCategory)
categoryRouter.get("/category", readCategory)
categoryRouter.get("/category/:id", readCategoryById)
categoryRouter.put("/category/:id", updateCategory)
categoryRouter.delete("/category/:id", deleteCategory)

// define the home page route
categoryRouter.get('/movie', (req, res) => {
  res.send('Birds home page')
});


module.exports = categoryRouter

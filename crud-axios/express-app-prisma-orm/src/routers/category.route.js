const express = require('express');
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/category.controller');
const categoryRouter = express.Router()

categoryRouter.post("/category", createCategory)
categoryRouter.get("/category", readCategory)
categoryRouter.get("/category/:id", readCategoryById)
categoryRouter.put("/category/:id", updateCategory)
categoryRouter.delete("/category/:id", deleteCategory)

module.exports = categoryRouter

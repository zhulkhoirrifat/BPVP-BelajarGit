const express = require('express');
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController');
const authenticateJwt = require('../middleware/authMiddleware');
const { validationBodyCategories } = require('../middleware/validation');
const categoryRouter = express.Router()

categoryRouter.post("/category", authenticateJwt, validationBodyCategories, createCategory)
categoryRouter.get("/category", authenticateJwt, readCategory)
categoryRouter.get("/category/:id", authenticateJwt, readCategoryById)
categoryRouter.put("/category/:id", authenticateJwt, validationBodyCategories, updateCategory)
categoryRouter.delete("/category/:id", authenticateJwt, deleteCategory)

module.exports = categoryRouter

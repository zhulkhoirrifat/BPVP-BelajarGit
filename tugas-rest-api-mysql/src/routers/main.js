const express = require('express');
const { createGrade, readGrade, updateGrade, deleteGrade } = require('../controller/nilaiController');
const router = express.Router();

router.post("/nilai", createGrade);
router.get("/nilai", readGrade);
router.put("/nilai/:id", updateGrade);
router.delete("/nilai/:id", deleteGrade);

module.exports = router;
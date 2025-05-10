const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Create a new product
router.post('/', ProductController.create);

// Get all products
router.get('/', ProductController.findAll);

// Get a single product by ID
router.get('/:id', ProductController.findOne);

// Update a product by ID
router.put('/:id', ProductController.update);

// Delete a product by ID
router.delete('/:id', ProductController.delete);

module.exports = router;
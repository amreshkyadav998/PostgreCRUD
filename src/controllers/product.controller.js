const Product = require('../models/product.model');

// Controller methods for handling product operations
const ProductController = {
  // Create a new product
  create: async (req, res) => {
    try {
      // Validate request
      if (!req.body.name || !req.body.price) {
        return res.status(400).json({
          success: false,
          message: 'Name and price are required fields'
        });
      }

      const product = await Product.create(req.body);
      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product
      });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create product',
        error: error.message
      });
    }
  },

  // Get all products
  findAll: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({
        success: true,
        message: 'Products retrieved successfully',
        data: products
      });
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve products',
        error: error.message
      });
    }
  },

  // Get product by ID
  findOne: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }
      res.status(200).json({
        success: true,
        message: 'Product retrieved successfully',
        data: product
      });
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve product',
        error: error.message
      });
    }
  },

  // Update product by ID
  update: async (req, res) => {
    try {
      // Check if product exists
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      // Update product
      const updatedProduct = await Product.update(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: updatedProduct
      });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update product',
        error: error.message
      });
    }
  },

  // Delete product by ID
  delete: async (req, res) => {
    try {
      // Check if product exists
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      // Delete product
      await Product.delete(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete product',
        error: error.message
      });
    }
  }
};

module.exports = ProductController;
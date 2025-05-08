const db = require('../config/db.config.js');

// Create products table if it doesn't exist
const createProductsTable = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Products table created or already exists');
  } catch (error) {
    console.error('Error creating products table:', error);
  }
};

// Initialize table
createProductsTable();

// Product model with CRUD operations
const Product = {
  // Create a new product
  create: async (product) => {
    const { name, description, price, quantity } = product;
    const query = `
      INSERT INTO products (name, description, price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [name, description, price, quantity];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Get all products
  findAll: async () => {
    try {
      const result = await db.query('SELECT * FROM products ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Get product by ID
  findById: async (id) => {
    try {
      const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Update product by ID
  update: async (id, product) => {
    const { name, description, price, quantity } = product;
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, quantity = $4, updated_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING *
    `;
    const values = [name, description, price, quantity, id];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Delete product by ID
  delete: async (id) => {
    try {
      const result = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Product;
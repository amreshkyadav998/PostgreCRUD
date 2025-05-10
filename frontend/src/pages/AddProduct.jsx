import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      const result = await response.json();
      if (result.success) {
        alert('Product added successfully');
        navigate('/products'); // Redirect after success
      } else {
        alert('Failed to add product: ' + result.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  return (
    <div className="mx-[320px] p-4 border-red-500 hover:bg-emerald-200 ease-in-out duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl rounded-lg my-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 from-indigo-500 to-purple-500 bg-gradient-to-r text-transparent bg-clip-text">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border p-2 w-[420px] rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="border p-2 w-[420px] rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="border p-2 w-[420px] rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          className="border p-2 w-[420px] rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

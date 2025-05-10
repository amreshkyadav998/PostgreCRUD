import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import React from 'react';

// Import your pages
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/addProduct';
import UpdateProduct from './pages/updateProduct';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='bg-emerald-100 min-h-screen font-serif'>
      <Router>
        <Navbar /> {/* Navbar visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;

import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex font-serif space-x-2 justify-center shadow-2xl rounded-b-2xl bg-[#f9e9de] text-black p-2 mx-4 md:p-4'>
    <div className="font-serif flex flex-row space-x-4 md:space-x-6 shadow-2xl">
      <Link className="text-black font-medium border-1 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 ease-in-out 
               hover:scale-105 hover:-translate-y-1 hover:shadow-2xl" to="/">Home</Link>
      <Link className="text-black font-medium border-1 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 ease-in-out 
               hover:scale-105 hover:-translate-y-1 hover:shadow-2xl" to="/products">Products</Link>
      <Link className="text-black font-medium border-1 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 ease-in-out 
               hover:scale-105 hover:-translate-y-1 hover:shadow-2xl" to="/add">Add Product</Link>
    </div>
    </div>
  );
};

export default Navbar;

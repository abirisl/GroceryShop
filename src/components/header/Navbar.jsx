import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const category = [
  { name: 'Grocery and Grains', route: '/Grocery' },
  { name: 'Home Spices', route: '/HomeSpices' },
  { name: 'Honey, Nuts and Seeds', route: '/HoneyNutsSeeds' },
  { name: 'Oil and Extracts', route: '/OilExtracts' },
  { name: 'Other Products', route: '/OtherProducts' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-5 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Centered Search Bar for Mobile */}
        <div className="md:hidden flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cart & Login */}
        <div className="md:hidden flex items-center gap-5">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <h3 className="text-lg font-medium">🛒</h3>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
          {/* Login/Signup */}
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center mt-4">

        {/* Category Selector & Search */}
        <div className="flex items-center gap-5 w-2/3">
          <div className="flex gap-2 bg-slate-100 p-3 rounded-md w-full">
            {/* Category Selector */}
            <div className="w-1/3">
              <select className="w-full p-2 bg-emerald-400 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Product List</option>
                {category.map((item, index) => (
                  <option key={index} value={item.route}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Product */}
            <div className="w-2/3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 bg-slate-100 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Cart & Login for Desktop */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <h3 className="text-lg font-medium">🛒</h3>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
          {/* Login/Signup */}
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-slate-100 p-4 rounded-md">
          {/* Category Selector */}
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Category</option>
            {category.map((item, index) => (
              <option key={index} value={item.route}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
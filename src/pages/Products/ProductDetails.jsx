import React from 'react';
import useNuts from '../hooks/useNuts';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingBag, FaHome, FaStore } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineDescription, MdInventory } from 'react-icons/md';

function ProductDetails() {
  const { nutId } = useParams();
  const [nuts] = useNuts();
  const id = parseInt(nutId)
  const nut = nuts.find(nut => nut.id === id);

  if (!nut) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
          <p className="text-gray-600 mt-2">The nut you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Destructure nut properties
  const { name, price, description, image, rating, stock, category } = nut;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <a href="/" className="text-gray-400 hover:text-gray-500 flex items-center">
                  <FaHome className="mr-1" /> Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <IoIosArrowForward className="flex-shrink-0 h-4 w-4 text-gray-300" />
                <a href="/products" className="ml-4 text-gray-400 hover:text-gray-500 flex items-center">
                  <FaStore className="mr-1" /> Nuts
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <IoIosArrowForward className="flex-shrink-0 h-4 w-4 text-gray-300" />
                <span className="ml-4 text-gray-500 font-medium">{name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={image || "https://via.placeholder.com/600x600?text=Nut+Image"}
              alt={name}
              className="w-full h-auto object-cover object-center rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
            <p className="text-gray-500 mt-2">{category}</p>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((star) => (
                  star < rating ? (
                    <FaStar key={star} className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <FaRegStar key={star} className="h-5 w-5 text-gray-300" />
                  )
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {rating} stars
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-3xl font-bold text-gray-900">
                ${price}
              </p>
              <p className={`mt-2 text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock > 0 ? `${stock} in stock` : 'Out of stock'}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <MdOutlineDescription className="mr-2" /> Description
              </h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <button
                disabled={stock <= 0}
                className={`flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                  stock > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
                } md:py-4 md:text-lg md:px-10`}
              >
                <FaShoppingBag className="h-5 w-5 mr-2" />
                {stock > 0 ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-500 w-32 flex items-center">
                    <FaStore className="mr-2" /> Category
                  </span>
                  <span className="text-gray-900">{category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 w-32 flex items-center">
                    <MdInventory className="mr-2" /> Availability
                  </span>
                  <span className="text-gray-900">{stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
import React from 'react';

function Product({ product }) {
  const { name, image, description, price } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
      </div>

      {/* Product Details */}
      <div className="px-6 py-4">
        {/* Product Name */}
        <div className="font-bold text-3xl mb-2 uppercase text-center">{name}</div>

        {/* Product Description */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* Price and Add to Cart Button */}
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Price */}
        <span className="text-lg font-semibold text-gray-900">${price}</span>

        {/* Add to Cart Button */}
        <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
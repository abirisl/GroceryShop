import React from 'react';

function Nut({ nut, index }) { // Added `index` prop for numbering
    const { name, weight, image, description, price } = nut;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            {/* Corner Numbering */}
            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-br-lg bg-gradient-to-br from-amber-900 to-lime-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-lime-700 hover:border-lime-800 transform hover:scale-105 transition-transform duration-300">
                {index + 1} {/* Display the number (starting from 1) */}
            </div>


            {/* Image Container */}
            <div className="w-full flex justify-center items-center p-4"> {/* Center the image */}
        <img
          className="w-48 h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
      </div>
            {/* Product Details */}
            <div className="px-6 py-4 uppercase text-center">
                {/* Product Name */}
                <div className="font-bold text-3xl mb-2">{name}</div>
                {/* Product Weight */}
                <h3 className="text-xl">{weight}</h3>
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

export default Nut;
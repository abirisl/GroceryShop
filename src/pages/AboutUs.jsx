import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/gbWNfjcL/about.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg sm:text-xl">Fresh, Local, and Delivered with Care</p>
        </div>
      </div>
      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Our Story</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              Founded in 2010, FreshMart started as a small family-owned grocery store in the heart of the city. Our mission
              has always been to provide fresh, locally sourced, and high-quality products to our community.
            </p>
            <p className="text-gray-600">
              Over the years, we've grown into a trusted name, offering a wide range of organic produce, dairy, meats, and
              pantry staples. We believe in supporting local farmers and sustainable practices.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/1J8VHVZk/ourStory.jpg"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-lime-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Fresh Produce</h3>
              <p className="mt-2 text-gray-600">Locally sourced and delivered daily.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Organic Options</h3>
              <p className="mt-2 text-gray-600">A wide range of organic products.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Sustainable Practices</h3>
              <p className="mt-2 text-gray-600">Committed to eco-friendly solutions.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Community Focused</h3>
              <p className="mt-2 text-gray-600">Supporting local farmers and businesses.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Meet the Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
            <p className="mt-2 text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
            <p className="mt-2 text-gray-600">Head of Operations</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Mike Johnson</h3>
            <p className="mt-2 text-gray-600">Head of Procurement</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Sarah Lee</h3>
            <p className="mt-2 text-gray-600">Customer Relations</p>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">What Our Customers Say</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"FreshMart has the best organic produce in town. I love their commitment to quality!"</p>
              <p className="mt-4 font-semibold text-gray-900">- Emily R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"The team is so friendly, and the products are always fresh. Highly recommend!"</p>
              <p className="mt-4 font-semibold text-gray-900">- David M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"I love supporting a local business that cares about the community and the environment."</p>
              <p className="mt-4 font-semibold text-gray-900">- Laura T.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-lime-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Join Our Community</h2>
          <p className="mt-4 text-lg text-white">Sign up for our newsletter to get the latest updates and offers.</p>
          <div className="mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-lime-700 text-white px-6 py-2 rounded-r-lg hover:bg-lime-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
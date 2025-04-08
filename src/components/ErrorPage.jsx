import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-center p-6">
    {/* Animated 404 text */}
    <div className="relative">
      <h1 className="text-9xl font-bold text-red-500 mb-4 animate-pulse">
        404
      </h1>
      <div className="absolute inset-0 bg-red-500 rounded-full opacity-10 blur-xl animate-ping"></div>
    </div>
    
    {/* Error message */}
    <h2 className="text-3xl font-semibold mb-2 text-gray-800">
      Oops! Page Not Found
    </h2>
    <p className="text-gray-600 mb-8 max-w-md text-lg">
      The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    
    {/* Action buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
      >
        Return Home
      </Link>
      <button 
        onClick={() => window.history.back()}
        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300"
      >
        Go Back
      </button>
    </div>
    
    {/* Additional help */}
    <p className="mt-8 text-gray-500 text-sm">
      Need help? <Link to="/contact" className="text-blue-600 hover:underline">Contact support</Link>
    </p>
  </div>
  )
}

export default ErrorPage
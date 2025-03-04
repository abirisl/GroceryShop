import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const navlinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/About" },
    { name: "Products", route: "/Products" },
    { name: "Blog", route: "/Blog" },
    { name: "Career", route: "/Career" },
    { name: "Contact", route: "/contact" },
]

function Menubar() {

  const [isMenu,setIsMenu] = useState(false);

  const toggleMenu = () =>{
    setIsMenu(!isMenu)
  }
  return (
    <div className="px-6 py-6 shadow-md">
      {/* Mobile Menu Button */}
      <div className="flex justify-between items-center md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-lime-800 hover:text-lime-600 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
        {/* Desktop Menu */}
        <ul className={`md:flex md:space-x-6 ${isMenu ? 'block' : 'hidden'} mt-4 md:mt-0`}>
                {navlinks.map((menu, index) => (
                    <li key={index} className="text-lime-800 hover:text-lime-600 font-medium">
                        <Link to={menu.route} className="hover:underline">
                            {menu.name}
                        </Link>
                    </li>
                ))}
            </ul>

              {/* Mobile Drawer Menu */}
              <div
                className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenu ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
            >
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={toggleMenu}
                ></div>

                {/* Drawer Panel */}s
                <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={toggleMenu}
                            className="text-lime-800 hover:text-lime-600 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Drawer Menu Links */}
                    <ul className="p-4">
                        {navlinks.map((menu, index) => (
                            <li key={index} className="mb-4">
                                <Link
                                    to={menu.route}
                                    className="text-lime-800 hover:text-lime-600 font-medium"
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
    </div>
  )
}

export default Menubar


import React from 'react';

const BlogPage = () => {
    // Sample blog data
    const blogs = [
        {
            id: 1,
            title: '5 Easy Recipes Using Fresh Produce',
            category: 'Recipes',
            date: 'October 10, 2023',
            image: 'https://via.placeholder.com/400x250',
            excerpt: 'Discover delicious recipes using fresh, locally sourced ingredients from our store.',
        },
        {
            id: 2,
            title: 'The Benefits of Eating Organic',
            category: 'Health Tips',
            date: 'October 5, 2023',
            image: 'https://via.placeholder.com/400x250',
            excerpt: 'Learn why organic food is better for your health and the environment.',
        },
        {
            id: 3,
            title: 'New Arrivals: Seasonal Fruits and Vegetables',
            category: 'Product Updates',
            date: 'October 1, 2023',
            image: 'https://via.placeholder.com/400x250',
            excerpt: 'Check out our latest arrivals of fresh, seasonal produce.',
        },
        {
            id: 4,
            title: 'How to Store Fresh Produce for Longer',
            category: 'Tips & Tricks',
            date: 'September 25, 2023',
            image: 'https://via.placeholder.com/400x250',
            excerpt: 'Follow these simple tips to keep your fruits and vegetables fresh for longer.',
        },
    ];

    const featuredPosts = blogs.slice(0, 2); // Show first 2 posts as featured

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/tTWzpwcb/blog.jpg')" }}>

                <div className="absolute"></div>
                <div className="relative text-center text-white">
                    <h1 className="text-4xl sm:text-6xl font-bold">Our Blog</h1>
                    <p className="mt-4 text-lg sm:text-xl">Tips, Recipes, and Updates from FreshMart</p>
                </div>
            </div>

            {/* Featured Posts Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Featured Posts</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-lime-600">{post.category}</span>
                                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                                <p className="mt-4 text-sm text-gray-500">{post.date}</p>
                                <a
                                    href={`/blog/${post.id}`} // Link to individual blog post
                                    className="mt-4 inline-block text-lime-600 hover:text-lime-700 font-semibold"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog List Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Latest Posts</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-lime-600">{post.category}</span>
                                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                                <p className="mt-4 text-sm text-gray-500">{post.date}</p>
                                <a
                                    href={`/blog/${post.id}`} // Link to individual blog post
                                    className="mt-4 inline-block text-lime-600 hover:text-lime-700 font-semibold"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">1</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">2</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">3</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Next →</button>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Categories</h2>
                <div className="mt-8 flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">Recipes</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Health Tips</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Product Updates</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Tips & Tricks</button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
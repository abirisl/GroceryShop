import React from 'react'

function Category({category,index}) {
    const {name,image}= category
    return (
        <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transiction-transform rounded-lg">
            <div className='flex justify-between items-center p-2'>
                <div className='space-y-4'>
                    <h3 className='font-medium text-xl'>{name}</h3>
                    <p></p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-100 bg-gray-50">
                    <img 
                        className="w-full h-full object-cover"
                        src={image} 
                        alt={name}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Category
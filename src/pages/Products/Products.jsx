import React from 'react'
import useProducts from '../hooks/useProducts'
import Product from './Product'

function Products() {
    const [products] = useProducts()
  return (
    <div className='m-5 font-semibold text-3xl'>
        <h1>Special Package and Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                products.map((product,index)=> <Product key={index} product={product}></Product>)
            }
        </div>
    </div>
  )
}

export default Products
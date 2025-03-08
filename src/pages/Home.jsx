import React from 'react'
import Banner from '../pages/Banner'
import Products from './Products/Products'
import Nuts from './Products/AllNuts/Nuts'
import BlogPage from './BlogPage'

function Home() {
  return (
    <div>
      <Banner/>
      <Nuts/>
      <Products/>
    </div>
  )
}

export default Home
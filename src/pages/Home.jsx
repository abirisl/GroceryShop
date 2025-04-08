import React from 'react'
import Banner from '../pages/Banner'
import Products from './Products/Products'
import Nuts from './Products/AllNuts/Nuts'
import BlogPage from './BlogPage'
import Categories from './Categories/Categories'

function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <Nuts/>
      <Products/>
    </div>
  )
}

export default Home
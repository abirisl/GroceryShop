import React, { useEffect, useState } from 'react'
import Category from './Category'

function Categories() {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('/category.json')
        .then(result => result.json())
        .then(data => setCategories(data))
    })
  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='font-bold text-2xl pb-3'>categories</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                categories.map((category,index)=> <Category key={index} category={category} index={index}></Category>)
            }
        </div>
    </div>
  )
}

export default Categories
import React from 'react'
import useNuts from '../../hooks/useNuts'
import Nut from './Nut'

function Nuts() {
    const [nuts] = useNuts()
  return (
    <div className='container pt-16'>
        <h1>Nut Walker</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                nuts.map((nut,index)=> <Nut key={index} nut={nut} index={index}></Nut>)
            }
        </div>
    </div>
  )
}

export default Nuts
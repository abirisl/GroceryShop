import React from 'react'
import useNuts from '../../hooks/useNuts'
import Nut from './Nut'

function Nuts() {
    const [nuts] = useNuts()
  return (
    <div className='m-5 font-semibold text-3xl'>
        <h1>Nut Walker</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                nuts.map((nut,index)=> <Nut key={index} nut={nut} index={index}></Nut>)
            }
        </div>
    </div>
  )
}

export default Nuts
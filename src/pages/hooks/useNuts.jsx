import React, { useEffect, useState } from 'react'

function useNuts() {
    const [nuts, setNuts] = useState([]);

    useEffect(() => {
        fetch('/nut.json')
        .then(res=> res.json())
        .then(data => setNuts(data))
    })
  return [nuts, setNuts]
}

export default useNuts
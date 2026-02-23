import React from 'react'

function Card({heading,data}) {
    
  return (
    <div className='card'>
        <h1>{heading}</h1>
        <p>{data}</p>
    </div>
  )
}

export default Card
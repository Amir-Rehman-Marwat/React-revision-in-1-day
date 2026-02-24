import React from 'react'
import { useParams } from 'react-router'

function Product() {
    const params =useParams();
    console.log(params)
  return (
    <div>
        <h1>WELCOME TO PRODUCT DETAILS</h1>
        <h2>{params.id}</h2>
    </div>
  )
}

export default Product
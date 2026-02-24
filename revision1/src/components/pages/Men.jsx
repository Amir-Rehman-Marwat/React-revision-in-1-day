import React from 'react'
import { Link, Outlet, useParams } from 'react-router'

function Men() {
    const params=useParams()
    console.log(params)
  return (
    <div>

          <h2>WELCOME TO THE MEN COLLECTION</h2>
          <Link to="/productDets">Produt</Link>
          
    </div>
  )
}

export default Men
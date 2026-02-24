import React from 'react'
import { Link, Outlet } from 'react-router'

function Shop() {
  return (
    <div>
    <div>
            <h1>THIS IS SHOP</h1>
            <Link to="/shop/men" >MEN</Link>
            <br />
            <Link to="/shop/kids" >Kids</Link>

       </div>

       <Outlet></Outlet>
    </div>
  )
}

export default Shop
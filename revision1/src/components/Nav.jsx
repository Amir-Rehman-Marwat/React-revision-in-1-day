import React from 'react'
import { Link, useNavigate } from 'react-router'

function Nav() {
  const navigate=useNavigate()
  return (
    <div className='nav'>
      <h1>THE MENTORS</h1>
      <Link to="/"> Home</Link>
      <br />
      <Link to="/shop"> shop</Link>
      <br />
      <Link to="/contact"> Contact</Link>
      <br />
      <Link to="/cart"> cart</Link>
      <br />
      <Link to="/about"> about</Link>
      <br />
      <button onClick={()=>{
        navigate("/")
      }}>Home</button>
      <br />
      <button onClick={()=>{
        navigate(-1)
      }}>Back</button>
<br />
      <button onClick={()=>{
        navigate(+1)
      }}>Next</button>
    </div>
  )
}

export default Nav
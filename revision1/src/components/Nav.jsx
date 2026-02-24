import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { ThemeContext } from '../contexts/themeContext'

function Nav() {
  const navigate=useNavigate()
  const data=useContext(ThemeContext)
  console.log(data)
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
      <br />
      <h2>Theme ={data}</h2>
    </div>
  )
}

export default Nav
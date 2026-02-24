import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Nav from './components/Nav'
import Shop from './components/pages/shop'
import NotFound from './components/pages/NotFound'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Cart from './components/pages/Cart'
import Men from './components/pages/Men'
import Kids from './components/pages/Kids'
import Product from './components/pages/Product'

function App() {
  return (
    <div>
    
     
      <Nav/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='*' element={<NotFound/>}></Route>
<Route path='/shop' element={<Shop/>}>
     <Route path='men' element={<Men/>}></Route>
     <Route path='kids' element={<Kids/>}></Route>
</Route>
<Route path='/productDets/:id' element={<Product/>}>

 </Route>
<Route path='/contact' element={<Contact/>}> </Route>
<Route path='/about' element={<About/>}> </Route>
<Route path='/cart' element={<Cart/>}> </Route>

</Routes>

    </div>
  )
}

export default App
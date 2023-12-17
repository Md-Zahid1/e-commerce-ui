import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup"
import ShopContextProvider from './context/ShopContext' 
import mens_banner from './assets/banner_mens.png'
import womens_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <ShopContextProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Shop />}/>
           <Route path='/men' element={<ShopCategory banner={mens_banner}  category="men"/>}/>
           <Route path='/women' element={<ShopCategory banner={womens_banner} category="women"/>}/>
           <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
           <Route path='/product' element={<Product />}/>
           <Route path=':Id' element={<Product />}/>

           <Route path='/cart' element={<Cart />}/>
           <Route path='/login' element={<LoginSignup />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        </ShopContextProvider>
      </div>
    </>
  )
}

export default App

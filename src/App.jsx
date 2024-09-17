import React from 'react'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Ourservices from './Pages/Ourservices/Ourservices'
import Gallery from './Pages/Gallery/Gallery'
import Blog from './Pages/Blog/Blog'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Home />
      <Cart />
      <Ourservices />
      <Gallery />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App

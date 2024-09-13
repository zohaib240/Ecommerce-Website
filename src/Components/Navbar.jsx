import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';





const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg bg-primary  d-flex justify-content-between p-2  ' style={{ height: '80px', width: '100%' }}   >
       <div className='text-white'><h3>Ecommerce App</h3></div>
       <div className='gap-5 d-flex'>
       <Link to="home" className='text-white text-decoration-none'>Home</Link>
        <Link to="about" className='text-white text-decoration-none'>About</Link>
        <Link to="product" className='text-white text-decoration-none'>Product</Link>
        <Link to="service" className='text-white text-decoration-none'>Services</Link>
        </div>
    </div>
  )
}

export default Navbar



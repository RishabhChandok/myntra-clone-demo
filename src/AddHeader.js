import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function AddHeader() {
  
    return (
        <div className='HeaderContainer'>
        <img className='logo' src='https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Myntra_Logo_1200x800.jpg?itok=nqk8933k'></img>
    
        <Link to='/' className='link1'><h2>HOME</h2></Link>
        <Link to='/Product' className='link1'><h2>Product</h2></Link>
        </div>
      )
  
}

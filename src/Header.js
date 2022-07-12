import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='HeaderContainer'>
    <img className='logo' src='https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Myntra_Logo_1200x800.jpg?itok=nqk8933k'></img>
    <ul className='list1'>
        <li>MEN</li>
        <li>WOMEN</li>
    </ul>
    <input className='searchBox' placeholder='Search Products....' type='text'></input>
    <Link to='/Product' className='link1'><h2>Product</h2></Link>
    <Link to='/AddtoCart' className='link1'><h2>Add to Cart</h2></Link>
    </div>
  )
}

export default Header
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function ProductHeader() {
  return (
    <div className='HeaderContainer'>
    <img className='logo' src='https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Myntra_Logo_1200x800.jpg?itok=nqk8933k'></img>
    <input className='searchBox' placeholder='Search Products....' type='text'></input>
    <Link to='/' className='link1'><h2>HOME</h2></Link>
    <Link to='/AddtoCart' className='link1'><h2>Add to Cart</h2></Link>
    </div>
  )
  
}

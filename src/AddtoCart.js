import React from 'react'
import { useSelector } from 'react-redux'
import './AddtoCart.css'
import AddHeader from './AddHeader'
export default function AddtoCart() {
const selector=useSelector(state=>state.finals)
let c1=0
  return (
    <div>
      <AddHeader></AddHeader>
    <div className='AddtoContainer'>
      <div>
      {selector.map((item)=>{
        return <div>
          <img style={{width:'400px',height:'400px'}} src={item.imgUrl}></img>
          <h1 style={{color:'grey'}}>Price {item.name}&nbsp; Rs-{item.price}</h1>
        </div>
      })}
      </div>
      <div className='TotalCount'>
      {selector.map((item)=>{
       c1=c1+item.price
        return <ul type='Square'>
          <li><h2>{item.name}-Rs{item.price}</h2></li>
        </ul>
      })}
      <h2 style={{backgroundColor:'blueviolet'}}>Total Cost-Rs{c1}</h2>
      </div>

    </div>
    </div>
  )
}

import React from 'react'
import { data } from './data'
import { useDispatch } from 'react-redux'
import { Action1 } from './Action'
import ProductHeader from './ProductHeader'
import './Product.css'
export default function Product() {
  const dispatcher1 =useDispatch()
  const clicked=(r1)=>{
    console.log(r1)
    dispatcher1(Action1(r1))
  }
  
  return (
    <div>
      <ProductHeader></ProductHeader>
    <div className='ImageContainer'>
      {data.arrayOfProducts.map((item,id)=>{
        // return <ImageBox id={id} src1={item.imgUrl}></ImageBox>
        return <div>
        <img id={id} className='ImageBox' src={item.imgUrl} alt='no found'></img>
        <h3>Price&nbsp;{item.price}</h3>
        <span><button onClick={()=>{clicked(item)}} style={{textAlign:'center',marginLeft:'0px'}}>Add to cart</button></span>
        </div>
    
      })}
</div>


    </div>
  )
}

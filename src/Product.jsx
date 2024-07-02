import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from './apiServer'


const Product = () => {
const dispatch =useDispatch()
const productData=useSelector(store=>store.producstData)
const products=productData.products


useEffect(()=>{
  try{
    dispatch(fetchProduct())
  }

  catch(error){
    console.log('error in fetching data')
  }
})
    
  return (
    <div>
   {products && products.map(item=>(
    
    <h2> {item.title}</h2>
   
   ))}
    </div>
  )
}


export default Product

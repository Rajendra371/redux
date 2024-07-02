import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../action/productAction'


const SingleProduct = () => {
    const dispatch=useDispatch()
    const data = useSelector(store=>store.product)
    const product=data.product


    useEffect(()=>{
        dispatch(fetchSingleProduct(2))

    }, [dispatch])
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default SingleProduct

import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Test = () => {
    const data=useSelector(store=>store.test)
    const dispatch=useDispatch()

    const addItem=()=>(
        dispatch({type: 'ADD_ITEM'})
    )
    const removeItem=()=>{
        dispatch({type: 'REMOVE_ITEM'})
    }
  return (
    <div>
      <h1> The number of item in the store is {data.count}</h1>
      <button onClick={addItem}>Add</button> &nbsp; &nbsp; &nbsp; 
      <button onClick={removeItem} >Remove</button>
    </div>
  )
}


export default Test

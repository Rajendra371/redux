import React , {useState} from 'react'
import { useDispatch } from 'react-redux'



const Form = () => {

  const [name,setName]=useState('')
  const dispatch=useDispatch()
  const changeName=()=>{
    dispatch({type:'CHANGE',payload:name})
  }
  return (
    <div>
    <label htmlFor ="fname">FullName</label>
    <br/>
    <input type="text" name="fname" id="fname" onChange={e=>setName(e.target.value)}></input>
    <br/>

    <button onClick={changeName}>Submit</button>
      
    </div>
  )
}

export default Form

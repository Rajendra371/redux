import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'

const Student = () => {
    const data=useSelector(store=>store.student)
  return (
    <div>
     <h1>The name of stident is {data.student_name}</h1> 


     <Form />

    </div>
  )
}

export default Student

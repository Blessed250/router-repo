import React from 'react'
import { Form } from 'react-bootstrap'


const FilterByName = ({setInput }) => {
  return (
    <div>
      <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setInput(e.target.value)}/>
    </div>
  )
}

export default FilterByName

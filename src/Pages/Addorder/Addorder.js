import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './addorder.css'
import{Link} from 'react-router-dom'

function Addorder() {
    return (
        <div className='addorder'>
            
            <Form className='form'>
            <p className='order'>Add Order</p>
            <div className='row1'>
             <div className='w-50 '>
  <Form.Group className="mb-1" >
    <Form.Label>Customer Name</Form.Label>
    <Form.Control type="text" size="sm" />
  </Form.Group>
</div>
<div className='w-50 address'>
<Form.Group className="mb-1" >
    <Form.Label>Customer Address</Form.Label>
    <Form.Control type="text" size="sm" />
  </Form.Group>
</div>
</div>

<div className='row1'>
             <div className='w-50 '>
  <Form.Group  >
    <Form.Label>Customer Email</Form.Label>
    <Form.Control type="email" size="sm" />
  </Form.Group>
  </div><div className='w-50 phone '>
  <Form.Group className="mb-1" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" size="sm" />
  </Form.Group>
 </div></div>

 <Form.Group className="mb-1" >
    <Form.Label>Item & Quantity</Form.Label>
    <Form.Control type="text" size="sm" />
  </Form.Group>

  <Form.Group className="mb-2" >
    <Form.Label>Amount</Form.Label>
    <Form.Control type="text" size="sm" />
  </Form.Group>
 <Link to="/orderlist">
  <Button variant="success" type="submit">
    Submit
  </Button></Link>
</Form>
        </div>
    )
}

export default Addorder

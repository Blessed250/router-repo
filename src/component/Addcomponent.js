import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Addcomponent = ({add}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // initial state
  const [title , setTitle] = useState ('') ;
  const [description  , setDescription] = useState ('') ;
  const [rate , setRate] = useState ('') ;
  const [posterUrl , setPoster] = useState ('') ;
  // update 
  const handleTitle = (e) => {
    setTitle (e.target.value)
  } ;
  const handleDescription = (e) => {
    setDescription (e.target.value)
  } ;
  const handleRate = (e) => {
    setRate (e.target.value)
  } ;
  const handlePoster = (e) => {
    setPoster (e.target.value)
  } ;

  const handleMovie = () => {
    let newMovie = {title ,description , rate , posterUrl }
    add (newMovie)
    handleClose()
  }


  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        value={title} onChange={handleTitle} />
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" 
         value={description} onChange={handleDescription}/>
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter rate" 
         value={rate} onChange={handleRate}/>
        <Form.Label>Movie poster</Form.Label>
        <Form.Control type="url" placeholder="Enter movie poster" 
         value={posterUrl} onChange={handlePoster}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addcomponent


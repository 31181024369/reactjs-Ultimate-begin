import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from "react-icons/fc";
const ManageCreateUser=(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>
         <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="model-add-user">
          <Modal.Header closeButton>
            <Modal.Title> Add new user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
           placeholder="Enter email"
          
            />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
           placeholder="Password"
         
            />
        </Form.Group>
      </Row>

     

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
           placeholder="Username"
         
            />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Role</Form.Label>
          <Form.Select  
        
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label className='label-upload' htmlFor="lableUpload"><FcPlus />Upload file image</Form.Label>
          <Form.Control type="file"
           id="lableUpload"
            hidden/>
        </Form.Group>
       
      </Row>
      <Row className="mb-1">
      <Form.Group as={Col}  className='img-preview'>
        </Form.Group>
      </Row>

    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
export default ManageCreateUser;
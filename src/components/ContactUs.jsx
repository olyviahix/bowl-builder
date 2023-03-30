import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

function ContactUs() {
  return (
    <Form>
      <Form.Group className="name" controlId="formName">
        <Form.Label>Enter First and Last Name</Form.Label>
        <Form.Control class="enterName" type="name" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="question" controlId="formQuestion">
        <Form.Label>Comments, Questions, Concerns!?</Form.Label>
        <Form.Control class="enterQuestion" type="question" placeholder="Tell Us What You Think!" />
      </Form.Group>
      
      <Form.Group className="email" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control class="enterEmail" type="email" placeholder="Enter Email" />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Send!
      </Button>
    </Form>
  );
}

export default ContactUs;
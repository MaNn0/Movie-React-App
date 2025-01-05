import React from 'react'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import "../App.css";
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
    return (
        <Container className='con'>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupname">
                    <Form.Label className=''>name </Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className=''>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>                <Form.Group className="mb-3" controlId="formGroupUser-name">
                    <Form.Label className=''>User-name </Form.Label>
                    <Form.Control type="User-name" placeholder="Enter User-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default FormGroupExample;

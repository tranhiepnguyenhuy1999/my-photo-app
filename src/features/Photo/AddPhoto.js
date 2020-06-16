import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function AddPhoto() {
    return (
            <Container>
                <Row className=''>
                    <Col sx={12} md={6}>
                    <h1>Add Your Photo</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>   
                    </Col>
                </Row>
            </Container>
    )
}

export default AddPhoto

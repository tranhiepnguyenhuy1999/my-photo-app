import React from 'react'
import {Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Photo App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Photo</Nav.Link>
          <Nav.Link href="#features">Add Photo</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Header

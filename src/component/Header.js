import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Photo App</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to='/photo'>Photo</Link>
          <Nav.Link href="/photo/add">Add Photo</Nav.Link>
        </Nav>
        <Link to='/photo'>
        <Button>Home</Button>
          </Link>
      </Navbar>
    )
}

export default Header

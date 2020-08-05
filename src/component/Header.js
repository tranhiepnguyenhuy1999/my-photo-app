import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="" className='mr-5'>Photo App</Navbar.Brand>
        <Link to='/photo'>
        <Button>Home</Button>
        </Link>
        <Link to='/photo/add' className='text-white mr-2'>
          <Button>Add Photo</Button></Link>
      </Navbar>
    )
}

export default Header

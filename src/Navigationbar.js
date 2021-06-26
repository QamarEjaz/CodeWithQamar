import React from 'react'
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navigationbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/about">CodeWithQamar</Navbar.Brand>
    <Nav className="mr-auto  nav-style">
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/services">Blogs</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navigationbar;

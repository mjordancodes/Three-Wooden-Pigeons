import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Three Wooden Pigeons</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
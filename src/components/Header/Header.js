import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
const Header=()=>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className='navbar-brand'>Hỏi Dân IT</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="users" className='nav-link'>User</NavLink>
            <NavLink to="admins" className='nav-link'>Admin</NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">User</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <button className='btn-login'>Log in</button>
            <button className='btn-signup'>Sign up</button>
          {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Log in</NavDropdown.Item>
              <NavDropdown.Item href="">
                Log out
              </NavDropdown.Item>
              <NavDropdown.Item href="">Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
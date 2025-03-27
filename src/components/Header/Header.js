import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,useNavigate } from "react-router-dom";
import { logout } from '../../services/apiService';
import { toast } from 'react-toastify';
import { doLogout } from '../../redux/action/userAction';
const Header=()=>{
  const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
  const account=useSelector(state=>state.user.account);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate('/login');
  }
  const handleRegister=()=>{
    navigate('/register');
  }
  const handleLogout=async()=>{
    // console.log("account:",account);
    let rs= await logout("admin@gmail.com",account.refresh_token);
    if(rs && rs.EC===0){
      dispatch(doLogout());
      navigate('/login');
    }else{
      toast.error(rs.EM);
    }
  }
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
            {isAuthenticated===false ?
            <>
              <button className='btn-login' onClick={()=>handleLogin()}>Log in</button>
              <button className='btn-signup' onClick={()=>{handleRegister()}}>Sign up</button>
            </>
            :
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="">Log in</NavDropdown.Item> */}
              <NavDropdown.Item href="">Profile</NavDropdown.Item>
              <NavDropdown.Item href="" onClick={()=>handleLogout()}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            }
             <NavDropdown title="Việt nam" id="basic-nav-dropdown2" className="languages">
              <NavDropdown.Item href="">English</NavDropdown.Item>
              <NavDropdown.Item href="">Việt Nam</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
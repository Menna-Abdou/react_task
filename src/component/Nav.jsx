import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="home" className="tab">
              Home
            </NavLink>
            <Link to="about" className="tab">
              About
            </Link>
            <NavLink to="profile" className="tab">
              Profile
            </NavLink>
            <NavLink to="post" className="tab">
              Post
            </NavLink>
            <NavLink to="login" className="tab">
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
export default NavBar;

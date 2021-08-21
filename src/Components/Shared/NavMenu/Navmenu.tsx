import { Container, Nav, Navbar } from "react-bootstrap";
import menuIcon from "../../../assets/images/more-menu.png";
import logo from "../../../assets/images/brand-logo.png";
const Navmenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="img-fluid" width="50px" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <img
              src={menuIcon}
              alt="menu icon"
              width="20px"
              className="img-fluid"
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navmenu;

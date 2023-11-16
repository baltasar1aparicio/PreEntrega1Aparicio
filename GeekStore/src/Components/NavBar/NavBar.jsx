import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <>
      <Navbar className='navbar-color'>
        <Container>
          <Navbar.Brand className='text-color logo' href="#home"> GeekStore </Navbar.Brand>
          <Nav className="me-auto links">
            <Nav.Link className='text-color' href="#figures">Figuras</Nav.Link>
            <Nav.Link className='text-color' href="#clothes">Prendas</Nav.Link>
            <Nav.Link className='text-color' href="#other">Varios</Nav.Link>
            <Nav.Link href="#cart"> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
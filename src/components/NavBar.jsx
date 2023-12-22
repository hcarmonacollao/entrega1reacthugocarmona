import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useCategory } from '../hooks/UseCategory';

const NavBar = () => {
    const {category}=useCategory();
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to='/'>La Tiendita</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="#link">Shipping</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {category.map((item, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link to={`/category/${item}`}>{item}</Link>
                                    </NavDropdown.Item>
                                );
                            })}                     
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
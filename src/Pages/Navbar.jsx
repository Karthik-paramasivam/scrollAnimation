import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pizzalogo from "../Images/Pizzalogo.jpg"; // Ensure this path is correct
import '../Styles/Task.css'; // Add your custom styles here


function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container>
        {/* Brand Logo Section */}
        <Navbar.Brand href="#home" className='d-flex align-items-center brand-hover'>
          <img 
            src={Pizzalogo} 
            alt="Pizzalogo" 
            style={{ width: '50px', height: '50px', objectFit: 'contain', }} // Adjust logo size here
          />
          <span className="fw-bold">PizzaSpot</span>
        </Navbar.Brand>
        
        {/* Navbar Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center the Nav items */}
          <Nav className="mx-auto d-flex align-items-center"> 
            {/* Dropdown Menu */}
            <NavDropdown title="Our Menu" id="basic-nav-dropdown" className='text-center p-3'>
              <NavDropdown.Item href="#cheese-pizza">Cheese Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#pepperoni-pizza">Pepperoni Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#veggie-pizza">Veggie Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#meat-lovers-pizza">Meat Lovers Pizza</NavDropdown.Item>
            </NavDropdown>
            
            {/* Other Nav Links */}
            <Nav.Link href="#store" className='p-3'>PizzaSpot Store</Nav.Link>
            <Nav.Link href="#gift-card" className='p-3'>Gift Card</Nav.Link>
            <Nav.Link href="#corporate-enquiry" className='p-3'>Corporate Enquiry</Nav.Link>
            <Nav.Link href="#contact" className='p-3'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;

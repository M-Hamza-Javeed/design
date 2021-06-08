import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap'

export default function Header(){
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/Home">Design</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Products">Products</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
        </Navbar>
    )
    }
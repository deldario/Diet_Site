import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function Userlink() {
    return(
        <>
        <Nav fill variant="underline">
            <Link to={'/aClient'} className="userLink"> Clients </Link>    

            
            <Link to={'/aFood'} className="userLink"> Foods </Link>    
        </Nav>
        </>
    )
}

export default Userlink;
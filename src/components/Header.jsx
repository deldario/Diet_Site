import { useState } from 'react';
import { Container, Navbar, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

import logoLinkedin from '../images/linkedin.svg'
import homepageImg from '../images/homepageImg.svg'
import Userlink from './Userlink';

function Header(){

  const linkWork = "https://linkedin.com/in/dario-de-leo-53b666234"
  
  const [dataOra, setDataOra] = useState(new Date())
  const interval = setInterval(() => {
    setDataOra(new Date());}, 60000);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
        <Container>
          <Navbar.Brand>
            {dataOra.toLocaleDateString() + " - " + dataOra.toLocaleTimeString(["en-GB"], {
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Navbar.Brand>
            <Link to={'/'} className="userLink">
                <Image className='navbarImg' src={homepageImg}/>
            </Link>    
          <Navbar.Text>
            <Image className='navbarImg' src={logoLinkedin} roundedCircle/>
            Signed in as:
            <a
              className="App-link linkWork"
              href={linkWork}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dario De Leo
            </a>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center">
          {/* 
            <Userlink/>
          */}  
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default Header;
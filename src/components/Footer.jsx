import { Container, Image, Navbar } from 'react-bootstrap';

import imageDr from '../images/doctorFooter.jpg'

function Footer() {

  return(
    <Navbar bg="dark" data-bs-theme="dark" sticky="bottom">
      <Container className="d-flex justify-content-center">
        <Navbar.Text>
          <div className='navbarFooter'>
            <Image className='navbarImg' src={imageDr} roundedCircle/>
            Thanks for staying slim  💖
          </div>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
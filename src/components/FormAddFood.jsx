import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

function FormAddFood() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="bodyApp">
        <Header/>
        <Container fluid="sm">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2"/>
                    <Form.Group as={Col} md="4">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Cibo</InputGroup.Text>
                            <Form.Control required type="text" placeholder="Valore obbligatorio"/>
                        </InputGroup>
                    </Form.Group>    
                    <Form.Group as={Col} md="4">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Energy</InputGroup.Text>
                            <Form.Control required type="number" placeholder="Valore obbligatorio"/>
                            <InputGroup.Text>kcal.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                </Row>
        
                <Row className="mb-3">
                    <Form.Group as={Col} md="3"/>
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Protein</InputGroup.Text>
                            <Form.Control type="number"/>
                            <InputGroup.Text>g.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Fat</InputGroup.Text>
                            <Form.Control type="number"/>
                            <InputGroup.Text>g.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="3"/>
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Carbo</InputGroup.Text>
                            <Form.Control type="number"/>
                            <InputGroup.Text>g.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Fibre</InputGroup.Text>
                            <Form.Control type="number"/>
                            <InputGroup.Text>g.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                </Row>

                <ButtonGroup className="me-2 btnGroup">
                    <Button variant="warning" type="reset"> Reset </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2 btnGroup">
                    <Button type="submit" variant="success">Invia</Button>
                </ButtonGroup>
            </Form>
        </Container>
        <br/>
        <Footer/>
    </div>
  );
}

export default FormAddFood;
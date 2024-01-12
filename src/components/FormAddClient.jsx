import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

function FormAddClient() {
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
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control required type="text" placeholder="Valore obbligatorio"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control required type="text" placeholder="Valore obbligatorio"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Data di nascita</Form.Label>
                        <Form.Control required type="date" placeholder="Valore obbligatorio"/>
                    </Form.Group>
                </Row>
        
                <Row className="mb-3">
                    <Form.Label>Pesatura</Form.Label>
                    <Form.Group as={Col} md="3"/>
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Data</InputGroup.Text>
                            <Form.Control type="date" placeholder="Data"/>
                        </InputGroup>
                    </Form.Group>    
                    <Form.Group as={Col} md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Peso</InputGroup.Text>
                            <Form.Control type="number"/>
                            <InputGroup.Text>kg.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>    
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Note</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>    

                <Row className="mb-3">
                    <Form.Group as={Col} md="4"/>
                    <Form.Group as={Col} md="4">
                        <Form.Check required label="Agree to terms and conditions" feedbackType="invalid"/>
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

export default FormAddClient;
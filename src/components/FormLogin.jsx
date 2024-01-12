import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function FormLogin(props){
    return(
        <Container>
            <Form>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter username" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Invia
                </Button>
            </Form>
        </Container>    
    );
}

export default FormLogin;
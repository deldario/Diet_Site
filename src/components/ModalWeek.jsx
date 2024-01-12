import { Button, Container, Modal } from 'react-bootstrap';

import AccordationWeek from './AccordationWeek';

function ModalWeek(props) {
    
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter" show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example modalBody">
                <Container>
                    <AccordationWeek
                        menu={props.selectedMenu}
                    />
                </Container>
            </Modal.Body>
            <Modal.Footer className='modalFooter'>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}    

export default ModalWeek;
import { Accordion, Container } from 'react-bootstrap';

import ListFood from './ListFood';

function AccordationWeek(props) {

    return (
        <Accordion>
            {props.menu.diet.map((item,key) => (
                <Accordion.Item key={'accordation'+key} eventKey={key}>
                    <Accordion.Header>
                        {item.id}
                    </Accordion.Header>
                    <Accordion.Body className='accordationBody'>
                        <Container>
                            <ListFood
                                menu={item.menu}
                            />
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}    

export default AccordationWeek;
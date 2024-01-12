import { Col, ListGroup, Row, Tab} from 'react-bootstrap';

function ListFood(props) {
    
    return (
        <Tab.Container id="ListFood-container" defaultActiveKey="#link0" className='listfoodContainer'>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {props.menu.map((item,key) => (
                            <ListGroup.Item action variant='info' key={'meal'+key}  href={'#link'+key}>
                                {item.id}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {props.menu.map((item,key) => (
                            <Tab.Pane key={'panel'+key} eventKey={'#link'+key}>
                                {props.menu[key].foodlist.map((item) => (
                                    <li key={item.id+key}>
                                        {item.id}: 
                                        {item.num>0?
                                            <span>
                                                <span className='spanBold'> {item.num}</span> ({item.qta} g.)
                                            </span>
                                            :
                                            <span> {item.qta} g.</span>
                                        }
                                    </li>
                                ))}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default ListFood;
import { useState } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";

import ModalDay from "./ModalDay";
import ModalWeek from "./ModalWeek";

function MyButtonGroup(props) {

    const [selectedWeek, setSelectedWeek] = useState("");
    const [selectedMenu, setSelectedMenu] = useState("");
    const [modalDayShow, setModalDayShow] = useState(false);
    const [modalWeekShow, setModalWeekShow] = useState(false);
    const weekDiet = props.selectedMenu
    return (
        <Container>
            <hr />
            <ButtonGroup className="me-2 btnGroup">
                <Button 
                    key="All" className="btn" 
                    onClick={() => {
                        setSelectedWeek("Total week");
                        setSelectedMenu(weekDiet);
                        setModalWeekShow(true);
                    }}>
                    Total week
                </Button>
            </ButtonGroup>

            <ButtonGroup className="me-2 btnGroup">
                {weekDiet.diet.map((item,key) => (
                    <Button 
                        key={key} className="btn btn-info"
                        onClick={() => {
                            setSelectedWeek(item.id);
                            setSelectedMenu(item.menu);
                            setModalDayShow(true);
                        }}>
                        {item.id}
                    </Button>
                ))}
            </ButtonGroup>
            <hr />
            
            <ModalDay
                show={modalDayShow}
                onHide={() => setModalDayShow(false)}
                title={selectedWeek}
                selectedMenu={selectedMenu}
                size="lg"
            />
            <ModalWeek
                show={modalWeekShow}
                onHide={() => setModalWeekShow(false)}
                title={selectedWeek}
                selectedMenu={selectedMenu}
                size="lg"
            />
        </Container>
    );
}   
    
export default MyButtonGroup;
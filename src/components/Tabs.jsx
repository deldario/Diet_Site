import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import ButtonGroup from "./ButtonGroup";
import Table from './Table';
import completeDiet from '../files/diet.json'

function MyTabs(props) {

    const selectedTab = parseInt(props.value)
    const [checkedcheckboxes, resetCheckbox] = useState([])
    return (
        <Container>
            <Tabs className="mb-3 allTabs" 
                key="Tabs" defaultActiveKey="0" id="tabs"
                data-bs-theme="dark" justify
                onSelect={(id) => props.onTabChange(id)}
                onChange={() => resetCheckbox([])}
            >
                {props.diet.map((item, key) => (
                    <Tab className="singleTab"
                        key={key} eventKey={key} title={item.id}
                    >
                        <ButtonGroup
                            selectedMenu={completeDiet[selectedTab]}
                        />
                        <Table
                            selectedMenu={completeDiet[selectedTab].diet}
                            checkedcheckboxes={checkedcheckboxes}
                        />  
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );
}

export default MyTabs;

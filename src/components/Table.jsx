import { useState, useEffect } from 'react';
import { Container, Table, Form  } from 'react-bootstrap';

    function MyTable(props){

        const [switchState, setSwitchState] = useState({}); // Stato per gestire lo stato degli switch

        useEffect(() => {
            // Azzera lo stato degli switch quando la prop selectedMenu cambia
            setSwitchState({});
        }, [props.selectedMenu]);
     
        const handleSwitchChange = (id) => {
            // Gestisce il cambiamento di stato degli switch
            setSwitchState((prevSwitchState) => ({
                ...prevSwitchState,
                [id]: !prevSwitchState[id], // Inverte lo stato
            }));
        };

        const   totalFoodQta = getSumOfQtaAndNum(props.selectedMenu)
                totalFoodQta.sort(compare);
        return (
            <Container>
                <div className='divTabs'>
                    <span className="d-flex justify-content-center">Weekly shopping list</span>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Qty / Grams</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {totalFoodQta.map(item =>(
                                <tr key={item.id}>
                                    <td style={{textDecoration: switchState[item.id] ? "line-through" : "none", textDecorationColor: switchState[item.id] ? "red" : "initial" }}>
                                        {item.id}
                                    </td>
                                    {item.num>0? 
                                        <td style={{textDecoration: switchState[item.id] ? "line-through" : "none", textDecorationColor: switchState[item.id] ? "red" : "initial" }}>
                                           <span className='spanBold'>{item.num}</span> ({item.qta} g.)
                                        </td>
                                        :
                                        <td style={{textDecoration: switchState[item.id] ? "line-through" : "none", textDecorationColor: switchState[item.id] ? "red" : "initial" }}>
                                            {item.qta} g.
                                        </td>
                                    }
                                    <td>
                                        <Form.Check type="switch" id={item.id}
                                            checked={switchState[item.id] || false} // Usa lo stato per impostare lo stato degli switch
                                            onChange={() => handleSwitchChange(item.id)} // Gestisce il cambiamento di stato
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>    
            </Container>
        );
    }

    function getSumOfQtaAndNum(json) {
        const dietMap = json.map((day) => day.menu.map((meal) => meal.foodlist));
        const qtaAndNumMap = new Map();
        
        for (const dayDiet of dietMap) {
            for (const meal of dayDiet) {
            for (const food of meal) {
                const id = food.id;
                const qtaAndNum = qtaAndNumMap.get(id) || { qta: 0, num: 0 };
                qtaAndNum.qta += food.qta;
                qtaAndNum.num += food.num;
                qtaAndNumMap.set(id, qtaAndNum);
            }
            }
        }
        
        return Array.from(qtaAndNumMap.entries(), ([id, qtaAndNum]) => ({
            id,
            qta: qtaAndNum.qta,
            num: qtaAndNum.num,
        }));
    }

    function compare(a, b) {
        return a.id.localeCompare(b.id);
    }

export default MyTable;
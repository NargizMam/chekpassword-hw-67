import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {changeValue, checkPassword, deleteOneNumber} from "./DomophoneSlice";
import {btnState} from "../../components/Buttons/btnState";
import Buttons from "../../components/Buttons/Buttons";
import {Button, Col, Container} from "react-bootstrap";


const Domophone = () => {
    const text = useSelector((state: RootState)=> state.domophone.passwordText);
    const border = useSelector((state: RootState)=> state.domophone.passwordBorder);
    const stars = useSelector((state: RootState)=> state.domophone.stars);
    const dispatch = useDispatch();

    const btnNumber = (
        btnState.buttons.map(item => (
            <Buttons btnSymbol={item}
                       key={item}
                       tapNumber={() => dispatch(changeValue(item))}
            />
        ))
    );

    return (
        <Container fluid="md">
            <Col xs lg="2">
                <div className={`border ${border} p-3`}>
                    {stars ? stars : text}
                </div>
                <div className="calc__body m-2">
                    {btnNumber}
                    <Button variant="outline-secondary m-1"
                            onClick={() => dispatch(deleteOneNumber())}
                    > {'>'} </Button>
                    <Button variant="outline-secondary m-1"
                            onClick={() => dispatch(checkPassword())}
                    > Enter </Button>
                </div>
            </Col>
        </Container>
    );
};

export default Domophone;
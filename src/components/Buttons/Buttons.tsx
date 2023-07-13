import React from 'react';
import {Button} from "react-bootstrap";

interface Props {
    btnSymbol: string;
    tapNumber: (btnSymbol: string)=> void;
}

const BtnNumber: React.FC<Props> = ({btnSymbol, tapNumber}) => {
    return (
        <>
            <Button variant="outline-secondary m-1"
                    onClick={() => tapNumber(btnSymbol)}>{btnSymbol}
            </Button>{' '}
        </>
    );
};

export default BtnNumber;
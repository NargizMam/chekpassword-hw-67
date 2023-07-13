import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {checkPassword, deleteOneNumber} from "./DomophoneSlice";


const Domophone = () => {
    const text = useSelector((state: RootState)=> state.domophone.passwordText);
    const border = useSelector((state: RootState)=> state.domophone.passwordBorder);
    const stars = useSelector((state: RootState)=> state.domophone.stars);
    const dispatch = useDispatch();



    return (
        <div className="container mt-5">
            <div className="bg-light col-6 p-4 fs-3">
                <div className="">
                    <div className={`border ${border} p-3`}>
                        {stars ? stars : text}
                    </div>
                </div>
                <div className="calc__body m-2">
                    <button className="btn btn-white border border-dark m-2 p-2"
                            onClick={() => dispatch(deleteOneNumber())}
                    > {'>'} </button>
                    <button className="btn btn-white border border-dark m-2 p-2"
                            onClick={() => dispatch(checkPassword())}
                    > E </button>
                </div>

            </div>
        </div>
    );
};

export default Domophone;
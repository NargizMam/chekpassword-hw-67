import React from 'react';

const Domophone = () => {
    return (
        <div className="container mt-5">
            <div className="bg-light col-6 p-4 fs-3">
                <div className="">
                    <div >
                        stars
                    </div>
                </div>
                <div className="calc__body m-2">
                    0
                    <button className="btn btn-white border border-dark m-2 p-2"
                    > {'>'} </button>
                    <button className="btn btn-white border border-dark m-2 p-2"
                    > E </button>
                </div>

            </div>
        </div>
    );
};

export default Domophone;
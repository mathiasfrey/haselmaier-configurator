import React from 'react';


const Product = (props) => {

    return(
        <>
        <div className="padding-left">
            <h2>{props.title}</h2>
        </div>
        <div className="productView">
            <button onClick={props.smallTable}>Show me </button>
        </div>
        </>
    )
};

export default Product;

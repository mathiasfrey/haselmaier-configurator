import React from 'react';

class Product extends React.Component {



    render() {

       return(
        <>
        <div className="padding-left">
            <h2>{this.props.title}</h2>
        </div>
        <div className="productView">
        </div>
        </>
    )

    }



}

export default Product;

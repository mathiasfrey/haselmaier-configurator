import React from 'react';



class Product extends React.Component {

    render() {
       return(
        <>
        <div className="productView">
            {this.props.chosenTable}
            <br />
            {this.props.chosenPic}
        </div>
        </>
    )

    }



}

export default Product;

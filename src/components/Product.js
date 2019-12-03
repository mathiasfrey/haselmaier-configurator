import React from 'react';
import Intro from "./Intro";

class Product extends React.Component {

    render() {

       return(
        <>
        <Intro />
        <div className="tourView">
            {/*
            {this.props.chosenTablePic}
            {this.props.chosenMonitorPic}
            {this.props.chosenHeightPic} */}
        </div>
        <div className="productView">
        </div>
        </>
    )
    }
}

export default Product;

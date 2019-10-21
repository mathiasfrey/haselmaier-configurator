import React from 'react';
import Intro from "./Intro";



class Product extends React.Component {


    render() {
       return(
        <>
        <Intro />
        <div className="tourView">
            {this.props.chosenTablePic}
            {this.props.chosenMonitorPic}
            {this.props.chosenHeightPic}
        </div>
        <div className="productView">
        <h2> Ihr Productcode </h2>
        {this.props.productCodeOfTable + this.props.productCodeOfMonitor + this.props.productCodeOfMonitorRow + this.props.productCodeOfHeight +
         this.props.productCodeOfBlende + this.props.productCodeOfKabel + this.props.productCodeOfTechnik + this.props.productCodeOfContainer}
        </div>
        </>
    )
    }
}

export default Product;

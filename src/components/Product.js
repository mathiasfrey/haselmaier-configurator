import React from 'react';
import Intro from "./Tour/Intro";


class Product extends React.Component {



    render() {
       return(
        <>
        <div className="tourView">
        <Intro />
        {this.props.chosenTablePic}
        {this.props.chosenMonitorPic}
        {this.props.chosenHeightPic}
        </div>
        </>
    )
    }
}

export default Product;

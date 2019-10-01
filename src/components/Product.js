import React from 'react';



class Product extends React.Component {

    render() {
       return(
        <>
        <div className="productView">
            {this.props.chosenTablePic}
            {this.props.chosenMonitorPic}
            {this.props.chosenHeightPic}
        </div>
        </>
    )
    }
}

export default Product;

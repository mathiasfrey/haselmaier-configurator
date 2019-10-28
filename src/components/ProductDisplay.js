import React from 'react';
import table from '../assets/table_white.png'

class ProductDisplay extends React.PureComponent {
    // this component chooses the correct image
    // it gets nothing but the variables (table, height, etc.)
    // that make up the product code:
    // table
    // height
    // monitorRow
    // monitorCount
    // monitorSystem
    // blende
    // kabel
    // technikSide
    // technikContainer

    renderImage() {
        // approach: choose the image from right to left; i.e. start with container and go left
        if (this.props.table === 'S') {
            return (
                <img src={table} alt="" />
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Produkt</h1>
                {this.renderImage()}
            </div>
        );
    }
}  

export default ProductDisplay;
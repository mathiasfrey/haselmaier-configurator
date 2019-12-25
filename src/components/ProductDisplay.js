import React from 'react';
import {Images} from './Images/Images'
import PropTypes from 'prop-types';



class ProductDisplay extends React.PureComponent {


    renderImage(code) {
        if (code in Images) {
           return Images[code]
        } else if (code[0] === 'X') {
           return Images.starten
        } else {
           return Images.nopic
        }

    }

    generateCode() {
        var table = this.props.table || 'X';
        var height = 'E'; // all images are based on E
        var monitorRow = this.props.monitorRow || 'X';
        var monitorSystem = this.props.monitorSystem || 'X';
        var blende = this.props.blende || 'X';
        var technikSide = this.props.technikSide || 'X';
        var technikContainer = this.props.technikContainer || 'X';

        // SEXXXXX
        return table + height + monitorRow + monitorSystem + blende + technikSide + technikContainer;

    }



    render() {
        var code = this.generateCode();
        return (
            <div>
                <h1>Ihre Leitstelle</h1>
                {this.renderImage(code)}
            </div>
        );
    }
}

ProductDisplay.propTypes = {
    table: PropTypes.string,
    height: PropTypes.string,
    monitorRow: PropTypes.string,
    monitorSystem: PropTypes.string,
    blende: PropTypes.string,
    technikSide: PropTypes.string,
    technikContainer: PropTypes.string

};

export default ProductDisplay;
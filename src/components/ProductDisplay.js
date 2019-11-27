import React from 'react';
import {SE_SV_Images} from '../components/Images/SE_SV_Images'



class ProductDisplay extends React.PureComponent {


    renderImage(code) {
        if (code in SE_SV_Images) {
           return SE_SV_Images[code]
        } else if (code[0] === 'X') {
           return SE_SV_Images.starten
        } else {
           return SE_SV_Images.nopic
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

export default ProductDisplay;
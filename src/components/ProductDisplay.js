import React from 'react';
import table from '../assets/TTV/TTV.ME/TTV.MEXXXXXXX.jpg'
import reling from '../assets/TTV/RAILING_STATIV/1RRF.jpg'
import stativ from '../assets/TTV/RAILING_STATIV/1RST.jpg'
import reling_hv from '../assets/TTV/RAILING_STATIV/1RRH.jpg'
import one_row from '../assets/TTV/TTV.MV/TTV.MV1RRFXXX.jpg'
import two_row from '../assets/TTV/TTV.ME/TTV.ME2RSTXXX.jpg'
import ohne_blende from '../assets/TTV/TTV.MV/TTV.MV1RRFXBX.jpg'
import mit_blende from '../assets/TTV/TTV.MV/TTV.MV1RRFBBX.jpg'
import einseitig from '../assets/TTV/TTV.ME/TTV.ME1RRHBEX.jpg'
import beidseitig from '../assets/TTV/TTV.ME/TTV.ME1RRHBBX.jpg'
import mit_container from '../assets/TTV/TTV.ME/TTV.ME1RRHXXL.jpg'
import ohne_container from '../assets/TTV/TTV.ME/TTV.ME1RRHXXX.jpg'

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

        //CONTAINER
         if (this.props.technikContainer === 'L') {
            return (
               <img src={mit_container} alt="" height={600} width={900} />
            )
        } else if (this.props.technikContainer === 'X') {
            return (
                <img src={ohne_container} alt="" height={600} width={900} />
            )
        }

         //TECHNIK
        if (this.props.technikSide === 'E') {
            return (
               <img src={einseitig} alt="" height={600} width={900} />
            )
        } else if (this.props.technikSide === 'B') {
            return (
                <img src={beidseitig} alt="" height={600} width={900} />
            )
        }

        //BLENDE
          if (this.props.blende === 'X') {
            return (
                <img src={ohne_blende} alt="" height={600} width={900} />
            )
        } else if (this.props.blende === 'B') {
            return (
                <img src={mit_blende} alt="" height={600} width={900} />
            )
        }
        //MONITOR
        if (this.props.monitorRow === '1') {
            return (
                <img src={one_row} alt="" height={600} width={900} />
            )
        } else if (this.props.monitorRow === '2') {
            return (
                <img src={two_row} alt="" height={600} width={900} />
            )
        } else if (this.props.monitorSystem === 'X') {
            return (
                <img src={table} alt="" height={600} width={900} />
            )
        } else if (this.props.monitorSystem === 'S') {
            return (
                <img src={stativ} alt="" height={600} width={900} />
            )
        } else if (this.props.monitorSystem === 'F') {
            return (
                <img src={reling} alt="" height={600} width={900} />
            )
        }
        else if (this.props.monitorSystem === 'H') {
            return (
                <img src={reling_hv} alt="" height={600} width={900} />
            )
        }
        //HEIGHT
        if (this.props.height === 'E') {
            return (
                <img src={table} alt="" height={600} width={900} />
            )
        } else if (this.props.height === 'V') {
            return (
                <img src={table} alt="" height={600} width={900} />
            )
        }

        //TABLE
        if (this.props.table === 'S') {
            return (
                <img src={table} alt="" height={600} width={900} />
            );
        } else if (this.props.table === 'M') {
            return (
                <img src={table} alt="" height={600} width={900} />
            )
        } else if (this.props.table === 'L') {
            return (
                <img src={table} alt="" height={600} width={900} />
            )
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
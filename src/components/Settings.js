import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Height from "./Height";
import Server from "./Server";
import Light from "./Light";
import Powerboards from "./Powerboards";
import Assembler from "./Assembler";
import table_small from '../assets/table_small.jpg'
import table_middle from '../assets/table_middle.jpeg'
import table_large from '../assets/table_large.jpg'
import Summary from "./Summary";


const imagesPath = {
  small_table: table_small,
  middle_table: table_middle,
  large_table: table_large,
};
class Settings extends React.Component {
state = {
        chosenTable: String,
        priceOfTable: Number,
    };

    loadTableSmall = () => {
        this.setState({chosenTable: 'S' });
        this.setState({priceOfTable: 100});
        console.log(this.state.chosenTable);
        const imageName = 'small_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_small" />
        </div>
        )
    };


    loadTableMiddle = () => {
       console.log(this.state.chosenTable);
        this.setState({chosenTable: 'M'});
        this.setState({priceOfTable: 500});
        const imageName = 'middle_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_middle" />
        </div>
        )
    };

    loadTableLarge = () => {
        console.log(this.state.chosenTable);
        this.setState({chosenTable: 'L'});
        this.setState({priceOfTable: 1000});
        const imageName = 'large_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_large" />
        </div>
        )
    };



    render() {
      return (
            <>
                <div className="padding-left">
                <h2>Configure your own product </h2>
                </div>
                <div className="settings">
                <Table
                smallTable={this.loadTableSmall}
                middleTable={this.loadTableMiddle}
                largeTable={this.loadTableLarge}
                />
                <Monitor />
                <Server />
                <Height />
                <Light />
                <Powerboards />
                <Assembler />
                <Summary
                chosenTable={this.state.chosenTable}
                priceOfTable={this.state.priceOfTable}
                />
                </div>
            </>
       )
}

}

export default Settings;
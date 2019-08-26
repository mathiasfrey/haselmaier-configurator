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

export const sizeNumber = {
    sizeOne: 1,
    sizeTwo: 2,
    sizeThree: 3,
    sizeFour: 4,
    sizeFive: 5,
    sizeSix: 6,
    sizeSeven: 7,
    sizeEight: 8
};

export const decision = {
    0: 'Yes',
    1: 'No',
};

export const assembler = {
    0: 'Harry',
    1: 'Spax',
    2: 'Lukas',
    3: 'Kieflandi',
};


class Settings extends React.Component {
state = {
        chosenTable: String,
        priceOfTable: Number,
        chosenMonitorSize: Number,
        chosenServerSize: Number,
        chosenHeight: String,
        chosenLight: String,
        chosenPowerboard: String,
        chosenAssembler: String,
    };


    //TABLE CONFIGURATION

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

    //MONITOR CONFIGURATION

    monitorSize = (sizeNumber) => {
        this.setState({chosenMonitorSize: sizeNumber});
    };

    //SERVER CONFIGURATION

    serverSize = (sizeNumber) => {
        this.setState({chosenServerSize: sizeNumber})
    };

    //HEIGHT CONFIGURATION

    adjustHeight = (decision) => {
        this.setState({chosenHeight: decision})
    };

    //LIGHT CONFIGURATION

    preferLight = (decision) => {
        this.setState({chosenLight: decision})
    };

    //POWERBOARD CONFIGURATOR

    preferConfigurator = (decision) => {
        this.setState({chosenPowerboard: decision})
    };

    //ASSEMBLER CONFIGURATOR

    preferredAssembler = (assembler) => {
        this.setState({chosenAssembler: assembler})
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
                <Monitor
                monitorSize={this.monitorSize}
                />
                <Server
                serverSize={this.serverSize}
                />
                <Height
                adjustHeight={this.adjustHeight}
                />
                <Light
                chosenLight={this.preferLight}
                />
                <Powerboards
                chosenPowerboard={this.preferConfigurator}
                />
                <Assembler
                chosenAssembler={this.preferredAssembler}
                />
                <Summary
                chosenTable={this.state.chosenTable}
                priceOfTable={this.state.priceOfTable}
                chosenMonitorSize={this.state.chosenMonitorSize}
                chosenServerSize={this.state.chosenServerSize}
                chosenHeight={this.state.chosenHeight}
                chosenLight={this.state.chosenLight}
                chosenPowerboard={this.state.chosenPowerboard}
                chosenAssembler={this.state.chosenAssembler}
                />
                </div>
            </>
       )
}

}

export default Settings;
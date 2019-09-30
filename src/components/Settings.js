import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Kabel from "./Kabel";
import Technik from "./Technik";
import table_small from '../assets/test.png'
import table_middle from '../assets/table_middle.jpeg'
import table_large from '../assets/table_large.jpg'
import Summary from "./Summary";
import Product from "./Product";



const imagesPath = {
  small_table: <img src={table_small} height="450" width="400" alt="ref"/>,
  middle_table: <img src={table_middle} height="450" width="400" alt="ref"/>,
  large_table: <img src={table_large} height="450" width="400" alt="ref"/>,
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

export const blendDecision = {
    0: 'Keinen',
    1: 'Voller Blendschutz',
};

export const cableDecision = {
    0: 'Ohne',
    1: 'Voll integriert',
};

export const rows = {
    0: '1 - Reihig',
    1: '2 - Reihig',
};

export const sides = {
    0: 'Linksseitig',
    1: 'Rechtsseitig',
    2: 'Links- und rechtsseitig'
};

class Settings extends React.Component {
state = {
        chosenTable: String,
        chosenTablePic: Array,
        chosenMonitorSize: Number,
        chosenMonitorRow: Number,
        chosenKabelSize: Number,
        chosenBlende: String,
        chosenTechnik: Number,
        chosenPowerboard: String,
        chosenAssembler: String,
    };

    //TABLE CONFIGURATION

    loadTableSmall = () => {
        this.setState({chosenTablePic: imagesPath.small_table});
        this.setState({chosenTable: 'S' });
    };


    loadTableMiddle = () => {
        this.setState({chosenTablePic: imagesPath.middle_table});
        this.setState({chosenTable: 'M'});
    };

    loadTableLarge = () => {
        this.setState({chosenTablePic: imagesPath.large_table});
        this.setState({chosenTable: 'L'});
    };

    //MONITOR CONFIGURATION

    monitorSize = (sizeNumber) => {
        this.setState({chosenMonitorSize: sizeNumber});
    };

    monitorRow = (rows) => {
        this.setState({chosenMonitorRow: rows})
    };

    //KABEL CONFIGURATION

    KabelSize = (cableDecision) => {
        this.setState({chosenKabelSize: cableDecision})
    };

    //BLEND CONFIGURATION

    chosenBlende = (decision) => {
        this.setState({chosenBlende: decision})
    };

    //TECHNIK CONFIGURATION

    chosenTechnik = (sides) => {
        this.setState({chosenTechnik: sides})
    };

    render() {
      return (
            <>
                <div className="padding-left">
                <h2>Konfigurieren Sie Ihren Leitstellentisch </h2>

                </div>
                <div className="settings">
                <Table
                smallTable={this.loadTableSmall}
                middleTable={this.loadTableMiddle}
                largeTable={this.loadTableLarge}
                />
                <Monitor
                monitorSize={this.monitorSize}
                monitorRow={this.monitorRow}
                />
                <Kabel
                kabelSize={this.KabelSize}
                />
                <Blende
                chosenBlende={this.chosenBlende}
                />
                <Technik
                chosenTechnik={this.chosenTechnik}
                />
                <Summary
                chosenTable={this.state.chosenTable}
                chosenMonitorSize={this.state.chosenMonitorSize}
                chosenMonitorRow={this.state.chosenMonitorRow}
                chosenServerSize={this.state.chosenKabelSize}
                chosenBlende={this.state.chosenBlende}
                chosenTechnik={this.state.chosenTechnik}
                />
                <Product
                chosenTable={this.state.chosenTable}
                chosenPic={this.state.chosenTablePic}
                />
                </div>
            </>
       )
}

}

export default Settings;
import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Kabel from "./Kabel";
import Technik from "./Technik";
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
        this.setState({chosenTable: 'S' });
        const imageName = 'small_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_small" />
        </div>
        )
    };


    loadTableMiddle = () => {
        this.setState({chosenTable: 'M'});
        const imageName = 'middle_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_middle" />
        </div>
        )
    };

    loadTableLarge = () => {
        this.setState({chosenTable: 'L'});
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
                <h2>Konfigurieren Sie Ihre Leitstelle </h2>
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
                </div>
            </>
       )
}

}

export default Settings;
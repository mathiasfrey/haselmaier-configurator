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

export const decision = {
    0: 'Yes',
    1: 'No',
};


class Settings extends React.Component {
state = {
        chosenTable: String,
        chosenMonitorSize: Number,
        priceOfMonitor: Number,
        chosenKabelSize: Number,
        chosenBlende: String,
        chosenTechnik: String,
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

    //KABEL CONFIGURATION

    KabelSize = (sizeNumber) => {
        this.setState({chosenKabelSize: sizeNumber})
    };

    //HEIGHT CONFIGURATION

    chosenBlende = (decision) => {
        this.setState({chosenBlende: decision})
    };

    //LIGHT CONFIGURATION

    chosenTechnik = (decision) => {
        this.setState({chosenTechnik: decision})
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
                />
                <Kabel
                kabelSize={this.KabelSize}
                />
                <Blende
                chosenBlende={this.chosenBlende}
                />
                <Technik
                chosenLight={this.chosenTechnik}
                />
                <Summary
                chosenTable={this.state.chosenTable}
                chosenMonitorSize={this.state.chosenMonitorSize}
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
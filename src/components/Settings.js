import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Height from "./Height";
import Technik from "./Technik";
import table from '../assets/table_white.png'
import table_eight_monitors from '../assets/table_white_eight_monitors.png'
import table_four_monitors from '../assets/table_white_four_monitors.png'
import table_black_eight_monitors from '../assets/table_black_eight_monitors.png'
import Summary from "./Summary";
import TourSetup from "./Tour/TourSetup";


const imagesPath = {
    //Table
  small_table: <img src={table} height="500" width="600" alt="ref"/>,
  middle_table: <img src={table} height="500" width="600" alt="ref"/>,
  large_table: <img src={table} height="500" width="600" alt="ref"/>,
    //Monitor
  monitorOneRow: <img src={table_four_monitors} height="500" width="600" alt="ref"/>,
  monitorTwoRow: <img src={table_eight_monitors} height="500" width="600" alt="ref"/>,
    //Height
  eco: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,


};

export const monitorSystem = {
    0: 'OHNE',
    1: 'STATIV',
    2: 'RELING: OHNE HV',
    3: 'RELING: MIT HV',
};

export const blendDecision = {
    0: 'Keinen',
    1: 'Voller Blendschutz',
};

export const heightDecision = {
    0: 'ECO',
    1: 'VARIO',
};

export const rows = {
    0: '1 - Reihig',
    1: '2 - Reihig',
};

export const sides = {
    0: 'Linksseitig',
    1: 'Rechtsseitig',
    2: 'Links- und rechtsseitig',
    3: 'Ohne',
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        chosenTable: String,
        chosenTablePic: Array,
        chosenMonitorSize: Number,
        chosenMonitorPic: Array,
        chosenMonitorRow: Number,
        chosenHeightSetting: Number,
        chosenHeightPic: Array,
        chosenBlende: String,
        chosenTechnik: Number,
        chosenPowerboard: String,
        chosenAssembler: String,
        };
        this.initialState = this.state
    }

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

    monitorSize = (monitorSystem) => {

        this.setState({chosenMonitorSize: monitorSystem});
    };

    monitorOneRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: rows[0]})
    };

    monitorTwoRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: rows[1]})
    };

    //HEIGHT CONFIGURATION

    heightSetting = (heightDecision) => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.eco});
        this.setState({chosenHeightSetting: heightDecision})
    };

    //BLEND CONFIGURATION

    chosenBlende = (decision) => {
        this.setState({chosenBlende: decision})
    };

    //TECHNIK CONFIGURATION

    chosenTechnik = (sides) => {
        this.setState({chosenTechnik: sides})
    };

    //RESET

    handleReset = () => {
        this.setState(this.initialState)
    };

    render() {
      return (
            <>
                <div className="padding-left">
                <h2>Konfigurieren Sie Ihren Leitstellentisch </h2>
                </div>
                <div className="padding-left reset">
                    <button className="btn btn-1 btn-1a" onClick={this.handleReset}>RESET</button>
                </div>
                <div className="settings">
                <Table
                smallTable={this.loadTableSmall}
                middleTable={this.loadTableMiddle}
                largeTable={this.loadTableLarge}
                />
                <Monitor
                monitorSize={this.monitorSize}
                monitorOneRow={this.monitorOneRow}
                monitorTwoRow={this.monitorTwoRow}
                />
                <Height
                heightSetting={this.heightSetting}
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
                chosenServerSize={this.state.chosenHeightSetting}
                chosenBlende={this.state.chosenBlende}
                chosenTechnik={this.state.chosenTechnik}
                />
                <TourSetup
                chosenTablePic={this.state.chosenTablePic}
                chosenMonitorPic={this.state.chosenMonitorPic}
                chosenHeightPic={this.state.chosenHeightPic}
                />

                </div>
            </>
       )
}

}

export default Settings;
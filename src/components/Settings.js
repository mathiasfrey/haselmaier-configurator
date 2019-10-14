import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Height from "./Height";
import Technik from "./Technik";
import Kabel from "./Kabel";
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
  vario: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,

};



export const rows = {
    0: '1 - Reihig',
    1: '2 - Reihig',
};

export const sides = {
    0: 'Linksseitig',
    1: 'Rechtsseitig',
    2: 'Links- und rechtsseitig',
    3: 'Ohne Technikintegration',
};

export const container = {
    0: 'Mit Ladencontainer',
    1: 'Ohne Ladencontainer',
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        productCodeOfTable: String,
        productCodeOfMonitor: String,
        productCodeOfMonitorRow: String,
        productCodeOfHeight: String,
        productCodeOfBlende: String,
        productCodeOfKabel: String,
        productCodeOfTechnik: String,
        productCodeOfContainer: String,
        productCode: String,
        input: String,
        chosenTable: String,
        chosenTablePic: Array,
        chosenMonitorSize: Number,
        chosenMonitorPic: Array,
        chosenMonitorRow: Number,
        chosenHeightSetting: String,
        chosenHeightPic: Array,
        chosenBlende: String,
        chosenKabelRuecken: String,
        chosenTechnik: Number,
        chosenTechnikContainer: String,
        chosenPowerboard: String,
        chosenAssembler: String,
        };
        this.initialState = this.state
    }

    //TABLE CONFIGURATION

    loadTableSmall = () => {
        this.setState({chosenTablePic: imagesPath.small_table});
        this.setState({chosenTable: 'S' });
        this.setState({productCodeOfTable: 'TTV.S'})
    };

    loadTableMiddle = () => {
        this.setState({chosenTablePic: imagesPath.middle_table});
        this.setState({chosenTable: 'M'});
        this.setState({productCodeOfTable: 'TTV.M'})
    };

    loadTableLarge = () => {
        this.setState({chosenTablePic: imagesPath.large_table});
        this.setState({chosenTable: 'L'});
        this.setState({productCodeOfTable: 'TTV.L'})
    };

    //MONITOR CONFIGURATION

    monitorSystemWithout = () => {
        this.setState({chosenMonitorSize: 'OHNE'});
        this.setState({productCodeOfMonitor: 'OH'})
    };

    monitorSystemStativ = () => {
        this.setState({chosenMonitorSize: 'STATIV'});
        this.setState({productCodeOfMonitor: 'ST'})
    };

    monitorSystemRelingHV = () => {
        this.setState({chosenMonitorSize: 'RELING-HV'});
        this.setState({productCodeOfMonitor: 'RE-HV'})
    };

    monitorSystemReling = () => {
        this.setState({chosenMonitorSize: 'RELING'});
        this.setState({productCodeOfMonitor: 'RE'})
    };

    monitorOneRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: rows[0]});
        this.setState({productCodeOfMonitorRow: '1'})
    };

    monitorTwoRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: rows[1]});
        this.setState({productCodeOfMonitorRow: '2'})
    };

    //HEIGHT CONFIGURATION

    heightSettingEco = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.eco});
        this.setState({chosenHeightSetting: 'ECO'});
        this.setState({productCodeOfHeight: 'E'});
    };

    heightSettingVario = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.vario});
        this.setState({chosenHeightSetting: 'VARIO'});
        this.setState({productCodeOfHeight: 'V'});
    };

    //BLEND CONFIGURATION

    chosenBlendeKeinen = () => {
        this.setState({chosenBlende: 'KEINEN'});
        this.setState({productCodeOfBlende: 'K'})
    };

    chosenBlendeVoll = () => {
        this.setState({chosenBlende: 'VOLL'});
        this.setState({productCodeOfBlende: 'V'})
    };

    chosenKabelRueckenMit = () => {
        this.setState({chosenKabelRuecken: 'MIT Kabelrücken'});
        this.setState({productCodeOfKabel: 'MK'})
    };

    chosenKabelRueckenOhne = () => {
        this.setState({chosenKabelRuecken: 'OHNE Kabelrücken'});
        this.setState({productCodeOfKabel: 'OK'})
    };


    //TECHNIK CONFIGURATION

    chosenTechnikLinks = () => {
        this.setState({chosenTechnik: 'Linksseitig'});
        this.setState({productCodeOfTechnik: 'L'})
    };

    chosenTechnikRechts = () => {
        this.setState({chosenTechnik: 'Rechtsseitig'});
        this.setState({productCodeOfTechnik: 'R'})
    };

    chosenTechnikBeide = () => {
        this.setState({chosenTechnik: 'Links und Rechtsseitig'});
        this.setState({productCodeOfTechnik: 'B'})
    };

    chosenTechnikOhne = () => {
        this.setState({chosenTechnik: 'Ohne Technikintegration'});
        this.setState({productCodeOfTechnik: 'OT'})
    };

    chosenTechnikContainerMit = () => {
        this.setState({chosenTechnikContainer: 'Mit Ladencontainer'});
        this.setState({productCodeOfContainer: 'LC'})
    };

    chosenTechnikContainerOhne = () => {
        this.setState({chosenTechnikContainer: 'Ohne Ladencontainer'});
        this.setState({productCodeOfContainer: 'OL'})
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
                <div className="padding-left input">
                    <form>
                        <label>
                            Productcode:
                            <input type="text" name="name"/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
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
                monitorSystemWithout={this.monitorSystemWithout}
                monitorSystemStativ={this.monitorSystemStativ}
                monitorSystemRelingHV={this.monitorSystemRelingHV}
                monitorSystemReling={this.monitorSystemReling}
                monitorOneRow={this.monitorOneRow}
                monitorTwoRow={this.monitorTwoRow}
                />
                <Height
                heightSettingEco={this.heightSettingEco}
                heightSettingVario={this.heightSettingVario}
                />
                <Blende
                chosenBlendeKeinen={this.chosenBlendeKeinen}
                chosenBlendeVoll={this.chosenBlendeVoll}
                />
                <Kabel
                chosenKabelRueckenMit={this.chosenKabelRueckenMit}
                chosenKabelRueckenOhne={this.chosenKabelRueckenOhne}
                />
                <Technik
                chosenTechnikLinks={this.chosenTechnikLinks}
                chosenTechnikRechts={this.chosenTechnikRechts}
                chosenTechnikBeide={this.chosenTechnikBeide}
                chosenTechnikOhne={this.chosenTechnikOhne}
                chosenTechnikContainerMit={this.chosenTechnikContainerMit}
                chosenTechnikContainerOhne={this.chosenTechnikContainerOhne}
                />
                <Summary
                chosenTable={this.state.chosenTable}
                chosenMonitorSize={this.state.chosenMonitorSize}
                chosenMonitorRow={this.state.chosenMonitorRow}
                chosenServerSize={this.state.chosenHeightSetting}
                chosenBlende={this.state.chosenBlende}
                chosenKabelRuecken={this.state.chosenKabelRuecken}
                chosenTechnik={this.state.chosenTechnik}
                chosenContainer={this.state.chosenTechnikContainer}
                />
                <TourSetup
                chosenTablePic={this.state.chosenTablePic}
                chosenMonitorPic={this.state.chosenMonitorPic}
                chosenHeightPic={this.state.chosenHeightPic}
                productCodeOfTable={this.state.productCodeOfTable}
                productCodeOfMonitor={this.state.productCodeOfMonitor}
                productCodeOfMonitorRow={this.state.productCodeOfMonitorRow}
                productCodeOfHeight={this.state.productCodeOfHeight}
                productCodeOfBlende={this.state.productCodeOfBlende}
                productCodeOfKabel={this.state.productCodeOfKabel}
                productCodeOfTechnik={this.state.productCodeOfTechnik}
                productCodeOfContainer={this.state.productCodeOfContainer}

                />
                </div>
            </>
       )
}

}

export default Settings;
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
import Product from "./Product";


const imagesPath = {
    //Table
  small_table: <img src={table} height="500" width="600" alt="ref"/>,
  middle_table: <img src={table} height="500" width="600" alt="ref"/>,
  large_table: <img src={table} height="500" width="600" alt="ref"/>,
    //Height
  eco: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,
  vario: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,
    //Monitor
  monitorOneRow: <img src={table_four_monitors} height="500" width="600" alt="ref"/>,
  monitorTwoRow: <img src={table_eight_monitors} height="500" width="600" alt="ref"/>,

};



class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // Users select
        chosenTable: String,
        chosenTablePic: Array,
        chosenMonitorSystem: Number,
        chosenMonitorPic: Array,
        chosenMonitorRow: Number,
        chosenMonitorNumber: Number,
        chosenHeightSetting: String,
        chosenHeightPic: Array,
        chosenBlende: String,
        chosenKabelRuecken: String,
        chosenTechnik: Number,
        chosenTechnikContainer: String,
        disabled: false,
        };
        this.initialState = this.state
    }

    //Code2State

    code2state = (code) => {

        // parse product code
        // example: TTV.SRE-HV1EVMKLOL
        // var (table, monitorSystem, monitorCount, height, blende, technik);
        // x.match(/TTV\./)

        // step by step match and replace from LTR
        if (code.match(/TTV\./)) {
            // ok => matches, valid TTV code
        } else {
            return false;
        }
        code = code.replace(/TTV\./, '');
        console.log(code);

        // code table
        const tableRegex = /[SML]/;
        if (code.match(tableRegex)) {
            const table = code.match(tableRegex[0])
        } else {
            return false;
        }
        code = code.replace(tableRegex, '');
        console.log(code);


        // code Monitor Systems
        const monitorSystemsRegex = /[OSRH]/;
        if (code.match(monitorSystemsRegex)) {
            const monitorSystems = code.match(monitorSystemsRegex[0])
        } else {
            return false;
        }
        code = code.replace(monitorSystemsRegex, '');
        console.log(code);


        //code Monitor Count
        const monitorRowRegex = /[12]/;
        if (code.match(monitorRowRegex)) {
            const monitorRow = code.match(monitorRowRegex[0])
        } else {
            return false;
        }
        code = code.replace(monitorRowRegex, '');
        console.log(code);

        //code Height
        const heightRegex = /[EV]/;
        if (code.match(heightRegex)) {
            const height = code.match(heightRegex)[0];
        } else {
            return false;
        }
        code = code.replace(heightRegex, '');
        console.log(code);

        //code Blende
        const blendeRegex = /[KMFN]/;
        if (code.match(blendeRegex)) {
            const blende = code.match(heightRegex)[0];
        } else {
            return false;
        }
        code = code.replace(blendeRegex, '');
        console.log(code);

        //code Technik
        const technikRegex = /[DGBJCX]/;
        if (code.match(technikRegex)) {
            const technik = code.match(heightRegex)[0];
        } else {
            return false;
        }
        code = code.replace(technikRegex, '');
        console.log(code);
/*
        this.setState(
            {
                table: table,
                monitorSystem: monitorSystem,
                monitorCount: monitorCount,
                height: height,
                blende: blende,
                technik: technik,
            }
        );*/
    };

    //TABLE CONFIGURATION

    loadTableSmall = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.small_table});
        this.setState({chosenTable: 'S' });
        this.setState({productCodeOfTable: 'TTV.S'});
    };

    loadTableMiddle = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.middle_table});
        this.setState({chosenTable: 'M'});
        this.setState({productCodeOfTable: 'TTV.M'})
    };

    loadTableLarge = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.large_table});
        this.setState({chosenTable: 'L'});
        this.setState({productCodeOfTable: 'TTV.L'})
    };

    //HEIGHT CONFIGURATION

    heightSettingEco = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.eco});
        this.setState({chosenHeightSetting: 'ECO'});
        this.setState({productCodeOfHeight: 'E'});
    };

    heightSettingVario = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.vario});
        this.setState({chosenHeightSetting: 'VARIO'});
        this.setState({productCodeOfHeight: 'V'});
    };

    //MONITOR CONFIGURATION

    //Monitor Systems

    monitorSystemWithout = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'OHNE'});
        this.setState({productCodeOfMonitor: 'OH'})
    };

    monitorSystemStativ = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'STATIV'});
        this.setState({productCodeOfMonitor: 'ST'})
    };

    monitorSystemRelingHV = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING-HV'});
        this.setState({productCodeOfMonitor: 'REHV'})
    };

    monitorSystemReling = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING'});
        this.setState({productCodeOfMonitor: 'RE'})
    };

    // Monitor Rows

    monitorOneRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: '1-reihig'});
        this.setState({productCodeOfMonitorRow: '1'})
    };

    monitorTwoRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: '2-reihig'});
        this.setState({productCodeOfMonitorRow: '2'})
    };

    // Monitor Count

    monitorThree = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '3'})
    };
    monitorFour = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '4'})
    };
    monitorFive = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '5'})
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

    //Product Code

    //RESET

    handleReset = () => {
        this.setState(this.initialState)
    };

    handleTable = () => {
        return (
             <Table
                 smallTable={this.loadTableSmall}
                 middleTable={this.loadTableMiddle}
                 largeTable={this.loadTableLarge}>
            </Table>
        )
    };

    handleMonitor = () => {
        return (
             <Monitor
                 monitorSystemWithout={this.monitorSystemWithout}
                 monitorSystemStativ={this.monitorSystemStativ}
                 monitorSystemRelingHV={this.monitorSystemRelingHV}
                 monitorSystemReling={this.monitorSystemReling}
                 monitorOneRow={this.monitorOneRow}
                 monitorTwoRow={this.monitorTwoRow}
                 monitorThree={this.monitorThree}
                 monitorFour={this.monitorFour}
                 monitorFive={this.monitorFive}
                 table={this.state.chosenTable}
             >
             </Monitor>
        )
    };

    handleHeight = () => {
        return (
            <Height
                heightSettingEco={this.heightSettingEco}
                heightSettingVario={this.heightSettingVario}
            />
        )
    };

    handleBlende = () => {
        return (
            <Blende
                chosenBlendeKeinen={this.chosenBlendeKeinen}
                chosenBlendeVoll={this.chosenBlendeVoll}
            />
        )
    };

    handleKabel = () => {
        return (
            <Kabel
                chosenKabelRueckenMit={this.chosenKabelRueckenMit}
                chosenKabelRueckenOhne={this.chosenKabelRueckenOhne}
            />
        )
    };

    handleTechnik = () => {
        return (
            <Technik
                chosenTechnikLinks={this.chosenTechnikLinks}
                chosenTechnikRechts={this.chosenTechnikRechts}
                chosenTechnikBeide={this.chosenTechnikBeide}
                chosenTechnikOhne={this.chosenTechnikOhne}
                chosenTechnikContainerMit={this.chosenTechnikContainerMit}
                chosenTechnikContainerOhne={this.chosenTechnikContainerOhne}
            />
        )
    };

    handleSummary = () => {
        return (
            <Summary
                    chosenTable={this.state.chosenTable}
                    chosenMonitorNumber={this.state.chosenMonitorNumber}
                    chosenMonitorRow={this.state.chosenMonitorRow}
                    chosenMonitorSystem={this.state.chosenMonitorSystem}
                    chosenHeight={this.state.chosenHeightSetting}
                    chosenBlende={this.state.chosenBlende}
                    chosenKabelRuecken={this.state.chosenKabelRuecken}
                    chosenTechnik={this.state.chosenTechnik}
                    chosenContainer={this.state.chosenTechnikContainer}
            />
        )
    };

    handleProduct = () => {
        return (
            <Product
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
        )
    }


    render() {
        console.log(this.state);
      return (
            <>
                <div className="productcode">
                    <div className="padding-left input">
                        <form>
                            <label>
                                TTV-Code eingeben:
                                <input type="text" placeholder="TTV." name="name"/>
                            </label>
                            <input type="submit" value="Anzeigen" />
                        </form>
                    </div>
                </div>

                <div className="settings">
                    <button className="navBtn done">START</button>
                    <div className="divider done"></div>
                    <button className="navBtn">
                        {this.handleTable()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        {this.handleHeight()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        {this.handleMonitor()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        {this.handleBlende()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        {this.handleKabel()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        {this.handleTechnik()}
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">disabled</button>
                </div>
                <div className="summary">
                    {this.handleSummary()}
                </div>
                <div className="tourView">
                    {this.handleProduct()}
                </div>

            </>
       )
}

}

export default Settings;
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
import ProductCodeForm from './ProductCodeForm';


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
        };
        this.initialState = this.state
    }

    //Code2State


    code2state = (code) => {
        function codeAlertError(originalCode) {
            alert('Es tut uns leid, <' + originalCode + '> scheint kein gültiger TTV-Code zu sein.');
        }
        function matchTTV(code) {
            if (code.match(/TTV\./)) {
                // ok => matches, valid TTV code
                return {
                    'remainder': code.replace(/TTV\./, '')
                };
            }
            return false;
        }
        function matchTable(code) {
            // code table
            const tableRegex = /[SML]/;
            if (code.match(tableRegex)) {
                const table = code.match(tableRegex)[0];
                return {
                    'table': table,
                    'remainder': code.replace(tableRegex, '')
                };
            } 
            return false;

        }
        function matchMonitorSystem(code) {
            // code Monitor Systems
            const monitorSystemsRegex = /[OSRH]/;
            if (code.match(monitorSystemsRegex)) {
                const monitorSystem = code.match(monitorSystemsRegex)[0];
                return {
                    'monitorSystem': monitorSystem,
                    'remainder': code.replace(monitorSystemsRegex, '')
                };
            }
            
            return false;
        }
        function matchMonitorCnt(code) {
            //code Monitor Count
            const monitorRowRegex = /[12]/;
            if (code.match(monitorRowRegex)) {
                const monitorRow = code.match(monitorRowRegex)[0];
                return {
                    'monitorCnt': monitorRow,
                    'remainder': code.replace(monitorRowRegex, '')
                }
            }
            return false;
        }
    
        var originalCode = code;
        var rv; // return value
        var table, monitorSystem, monitorCnt; // , height, blende, technik;

        // parse product code
        // example: TTV.SRE-HV1EVMKLOL
        // step by step match and replace from LTR

        rv = matchTTV(code);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }

        rv = matchTable(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        table = rv.table;
        
        rv = matchMonitorSystem(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorSystem = rv.monitorSystem;


        rv = matchMonitorCnt(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorCnt = rv.monitorCnt;

        // //code Height
        // const heightRegex = /[EV]/;
        // if (code.match(heightRegex)) {
        //     const height = code.match(heightRegex)[0];
        // } else {
        //     return false;
        // }
        // code = code.replace(heightRegex, '');
        // console.log(code);

        // //code Blende
        // const blendeRegex = /[KMFN]/;
        // if (code.match(blendeRegex)) {
        //     const blende = code.match(heightRegex)[0];
        // } else {
        //     return false;
        // }
        // code = code.replace(blendeRegex, '');
        // console.log(code);

        // //code Technik
        // const technikRegex = /[DGBJCX]/;
        // if (code.match(technikRegex)) {
        //     const technik = code.match(heightRegex)[0];
        // } else {
        //     return false;
        // }
        // code = code.replace(technikRegex, '');
        // console.log(code);
        
        
        this.setState(
            {
                chosenTable: table,
                chosenMonitorSystem: monitorSystem,
                chosenMonitorNumber: monitorCnt,
                // table: table,
                // monitorSystem: monitorSystem,
                // monitorCount: monitorCnt,
                // height: height,
                // blende: blende,
                // technik: technik,
            }
        );
        console.log('UPDATED from code2state');
        // this.forceUpdate();
    };

    //TABLE CONFIGURATION

    loadTableSmall = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.small_table});
        this.setState({chosenTable: 'S' });
        this.setState({productCodeOfTable: 'TTV.S'})

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

    chosenKabelRueckenMit = (props) => {
        this.setState({chosenKabelRuecken: 'MIT Kabelrücken'});
        this.setState({productCodeOfKabel: 'MK'})
    };

    chosenKabelRueckenOhne = (props) => {
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



    render() {
      return (
            <>
                <div className="productcode">
                    <div className="padding-left input">
                        <ProductCodeForm
                            callback={this.code2state}
                        />
                    </div>
                </div>

                <div className="settings">
                    <button className="navBtn done">START</button>
                    <div className="divider done"></div>
                    <button className="navBtn">
                        <Table
                            smallTable={this.loadTableSmall}
                            middleTable={this.loadTableMiddle}
                            largeTable={this.loadTableLarge}
                        />
                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
                        <Height
                            heightSettingEco={this.heightSettingEco}
                            heightSettingVario={this.heightSettingVario}
                        />

                    </button>
                    <div className="divider"></div>
                    <button className="navBtn">
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
                         />
                    </button>
                    <div className="divider"></div>
                            <button className="navBtn">
                            <Blende
                            chosenBlendeKeinen={this.chosenBlendeKeinen}
                            chosenBlendeVoll={this.chosenBlendeVoll}
                            />
                            </button>
                    <div className="divider"></div>
                            <button className="navBtn">
                            <Kabel
                            chosenKabelRueckenMit={this.chosenKabelRueckenMit}
                            chosenKabelRueckenOhne={this.chosenKabelRueckenOhne}
                            />
                            </button>
                    <div className="divider"></div>
                            <button className="navBtn">
                             <Technik
                            chosenTechnikLinks={this.chosenTechnikLinks}
                            chosenTechnikRechts={this.chosenTechnikRechts}
                            chosenTechnikBeide={this.chosenTechnikBeide}
                            chosenTechnikOhne={this.chosenTechnikOhne}
                            chosenTechnikContainerMit={this.chosenTechnikContainerMit}
                            chosenTechnikContainerOhne={this.chosenTechnikContainerOhne}
                            />
                            </button>
                    <div className="divider"></div>
                    <button className="navBtn">disabled</button>
                </div>
                <div className="summary">
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
                </div>
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
            </>
       )
}

}

export default Settings;
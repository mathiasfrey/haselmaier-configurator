import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Height from "./Height";
import Technik from "./Technik";
import Kabel from "./Kabel";
import table from '../assets/table_white.png'
//import test from '../assets/test.png'
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
                if (table === 'S') {
                    tablePic = imagesPath.small_table;
                } else if (table === 'M') {
                    tablePic = imagesPath.middle_table;
                } else {
                    tablePic = imagesPath.large_table;
                }
                return {
                    'table': table,
                    'tablePic': tablePic,
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
        function matchMonitorRow(code) {
            //code Monitor Row
            const monitorRowRegex = /[12]/;
            if (code.match(monitorRowRegex)) {
                const monitorRow = code.match(monitorRowRegex)[0];
                if (monitorRow === '1') {
                    monitorPic = imagesPath.monitorOneRow;
                } else {
                    monitorPic = imagesPath.monitorTwoRow;
                }
                return {
                    'monitorCnt': monitorRow,
                    'monitorPic': monitorPic,
                    'remainder': code.replace(monitorRowRegex, '')
                }
            }
            return false;
        }
    
        var originalCode = code;
        var rv; // return value
        var table, monitorSystem, monitorCnt, tablePic, monitorPic; // , height, blende, technik;

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
        tablePic = rv.tablePic;
        
        rv = matchMonitorSystem(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorSystem = rv.monitorSystem;


        rv = matchMonitorRow(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorCnt = rv.monitorCnt;
        monitorPic = rv.monitorPic;

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
                chosenTablePic: tablePic,
                chosenMonitorSystem: monitorSystem,
                chosenMonitorRow: monitorCnt,
                chosenMonitorPic: monitorPic,
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
    };

    loadTableMiddle = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.middle_table});
        this.setState({chosenTable: 'M'});
    };

    loadTableLarge = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.large_table});
        this.setState({chosenTable: 'L'});
    };

    //HEIGHT CONFIGURATION

    heightSettingEco = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.eco});
        this.setState({chosenHeightSetting: 'ECO'});
    };

    heightSettingVario = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.vario});
        this.setState({chosenHeightSetting: 'VARIO'});
    };

    //MONITOR CONFIGURATION

    //Monitor Systems

    monitorSystemWithout = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'OHNE'});
    };

    monitorSystemStativ = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'STATIV'});
    };

    monitorSystemRelingHV = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING-HV'});
    };

    monitorSystemReling = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING'});
    };

    // Monitor Rows

    monitorOneRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: '1-reihig'});
    };

    monitorTwoRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: '2-reihig'});
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
    };

    chosenBlendeVoll = () => {
        this.setState({chosenBlende: 'VOLL'});
    };

    chosenKabelRueckenMit = () => {
        this.setState({chosenKabelRuecken: 'MIT Kabelrücken'});
    };

    chosenKabelRueckenOhne = () => {
        this.setState({chosenKabelRuecken: 'OHNE Kabelrücken'});
    };


    //TECHNIK CONFIGURATION

    chosenTechnikLinks = () => {
        this.setState({chosenTechnik: 'Linksseitig'});
    };

    chosenTechnikRechts = () => {
        this.setState({chosenTechnik: 'Rechtsseitig'});
    };

    chosenTechnikBeide = () => {
        this.setState({chosenTechnik: 'Links und Rechtsseitig'});
    };

    chosenTechnikOhne = () => {
        this.setState({chosenTechnik: 'Ohne Technikintegration'});
    };

    chosenTechnikContainerMit = () => {
        this.setState({chosenTechnikContainer: 'Mit Ladencontainer'});
    };

    chosenTechnikContainerOhne = () => {
        this.setState({chosenTechnikContainer: 'Ohne Ladencontainer'});
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
                        <ProductCodeForm
                            callback={this.code2state}
                        />
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
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
import ProductDisplay from "./ProductDisplay";
import ProductCodeForm from './ProductCodeForm';
import ProductCode from './ProductCode';

export const imagesPath = {
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
    //Blende
  ohne_blende: <img src={table_four_monitors} height="500" width="600" alt="ref"/>,
  mit_blende: <img src={table_four_monitors} height="500" width="600" alt="ref"/>,

};



class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // // Users select
        // chosenTable: String,
        // chosenTablePic: Array,
        // chosenMonitor: String,
        // chosenMonitorPic: Array,
        // chosenMonitorSystem: Number,
        // chosenMonitorSystemPic: Array,
        // chosenMonitorRow: Number,
        // chosenMonitorRowPic: Array,
        // chosenMonitorNumber: Number,
        // chosenMonitorNumberPic: Array,
        // chosenHeight: String,
        // chosenHeightPic: Array,
        // chosenBlende: String,
        // chosenBlendePic: Array,
        // chosenKabel: String,
        // chosenKabelPic: Array,
        // chosenTechnik: Number,
        // chosenTechnikPic: Array,
        // chosenTechnikContainer: String,
        // disabled: false,
        };
        //this.initialState = this.state
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
                    tablePic = imagesPath.mit_blende;
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

        /*function matchHeight(code) {
            const heightRegex = /[EV]/;
            if (code.match(heightRegex)) {
                const height = code.match(heightRegex)[0];
                if (height === 'E') {
                    heightPic = imagesPath.eco;
                } else {
                    heightPic = imagesPath.vario;
                }
                return {
                    'height': height,
                    'heightPic': heightPic,
                    'remainder': code.replace(heightRegex, '')
                }
            }
            return false;
        }*/

        /*function matchMonitorSystem(code) {
            const monitorSystemsRegex = /[OSRH]/;
            if (code.match(monitorSystemsRegex)) {
                const monitorSystem = code.match(monitorSystemsRegex)[0];
                if (monitorSystem === 'S') {
                    monitor = imagesPath.small_table;
                } else if (monitorSystem === 'O') {
                    monitor = imagesPath.middle_table;
                } else if (monitorSystem === 'R') {
                    monitor = imagesPath.large_table;
                } else if (monitorSystem === 'H') {
                    monitor = null;
                }
                return {
                    'monitor': monitorSystem,
                    'monitorSystemPic': 'monitorSystemPic',
                    'remainder': code.replace(monitorSystemsRegex, '')
                };
            }
            
            return false;
        }*/
        function matchMonitorRow(code) {
            //code Monitor Row
            const monitorRowRegex = /[12]/;
            if (code.match(monitorRowRegex)) {
                const monitor = code.match(monitorRowRegex)[0];
                if (monitor === '1') {
                    monitorPic = imagesPath.monitorOneRow;
                } else {
                    monitorPic = imagesPath.monitorTwoRow;
                }
                return {
                    'monitor': monitor,
                    'monitorPic': monitorPic,
                    'remainder': code.replace(monitorRowRegex, '')
                }
            }
            return false;
        }

        /*function matchMonitorCount(code) {
            const monitorCountRegex = /[345]/;
            if (code.match(monitorCountRegex)) {
                const monitorCount = code.match(monitorCountRegex)[0];
                if (monitorCount === '1') {
                    monitorCountPic = null;
                } else if (monitorCount === '2') {
                    monitorCountPic = null;
                } else if (monitorCount === '3') {
                    monitorCountPic = null;
                } else if (monitorCount === '4') {
                    monitorCountPic = null;
                } else {
                    monitorCountPic = null;
                }
                return {
                    'monitorCount': monitorCount,
                    'monitorCountPic': monitorCountPic,
                    'remainder': code.replace(monitorCountRegex, '')
                }
            }
            return false;
        }*/


       /* function matchBlende(code) {
            const blendeRegex = /[XB]/;
            if (code.match(blendeRegex)) {
                const blende = code.match(blendeRegex)[0];
                if (blende === 'X') {
                    blendePic = null;
                } else {
                    blendePic = null;
                }
                return {
                    'blende': blende,
                    'blendePic': blendePic,
                    'remainder': code.replace(blendeRegex, '')
                }
            }
            return false;
        }*/

        /*function matchKabel(code) {
            const kabelRegex = /[KX]/;
            if (code.match(kabelRegex)) {
                const kabel = code.match(kabelRegex)[0];
                if (blende === 'K') {
                    kabelPic = null;
                } else {
                    kabelPic = null;
                }
                return {
                    'kabel': kabel,
                    'kabelPic': kabelPic,
                    'remainder': code.replace(kabelRegex, '')
                }
            }
            return false;
        }*/

       /* function matchTechnik(code) {
            const technikRegex = /[LRBOCX]/;
            if (code.match(technikRegex)) {
                const technik = code.match(technikRegex)[0];
                if (technik === 'K') {
                    technikPic = null;
                } else {
                    technikPic = null;
                }
                return {
                    'technik': technik,
                    'technikPic': technikPic,
                    'remainder': code.replace(technikRegex, '')
                }
            }
            return false;
        }*/


    
        var originalCode = code;
        var rv; // return value
        var table, tablePic, monitor, monitorPic;

        // parse product code
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

       /* rv = matchMonitorSystem(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitor = rv.monitor;*/


        rv = matchMonitorRow(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitor = rv.monitor;
        monitorPic = rv.monitorPic;

        //rv = matchMonitorCount(rv.remainder);
       /* if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorCount = rv.monitorCount;
        monitorCountPic = rv.monitorCountPic;*/


        //rv = matchHeight(rv.remainder);
        /*if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        height = rv.height;
        heightPic = rv.heightPic;

        //rv = matchBlende(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        blende = rv.blende;
        blendePic = rv.blendePic;

        //rv = matchKabel(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        kabel = rv.kabel;
        kabelPic = rv.kabelPic;

        //rv = matchTechnik(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        technik = rv.technik;
        technikPic = rv.technikPic;*/


        this.setState(
            {
                chosenTable: table,
                chosenTablePic: tablePic,
                chosenMonitor: monitor,
                chosenMonitorPic: monitorPic,
            }
        );
    };

    //TABLE CONFIGURATION

    loadTableSmall = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.small_table});
        this.setState({chosenTable: 'S'});

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
        this.setState({chosenHeightPic: imagesPath.small_table});
        this.setState({chosenHeight: 'ECO'});
        this.setState({productCodeOfHeight: 'E'})
    };

    heightSettingVario = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.small_table});
        this.setState({chosenHeight: 'VARIO'});
        this.setState({productCodeOfHeight: 'V'})
    };

    //Monitor Systems

    monitorSystemWithout = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'OHNE'});
        this.setState({productCodeOfSystem: 'O'})
    };

    monitorSystemStativ = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'STATIV'});
        this.setState({productCodeOfSystem: 'S'})
    };

    monitorSystemRelingHV = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING-HV'});
        this.setState({productCodeOfSystem: 'H'})
    };

    monitorSystemReling = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenMonitorSystem: 'RELING'});
        this.setState({productCodeOfSystem: 'R'})

    };

    // Monitor Rows

    monitorOneRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: '1-reihig'});
        this.setState({productCodeOfRow: '1'})
    };

    monitorTwoRow = () => {
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: '2-reihig'});
        this.setState({productCodeOfRow: '2'})
    };

    // Monitor Count

    monitorThree = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '3'});
        this.setState({productCodeOfNumber: '3'})
    };
    monitorFour = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '4'});
        this.setState({productCodeOfNumber: '4'})
    };
    monitorFive = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorNumber: '5'});
        this.setState({productCodeOfRow: '5'})
    };

    //BLEND CONFIGURATION

    chosenBlendeKeinen = () => {
        this.setState({chosenBlende: 'KEINEN'});
        this.setState({chosenBlendePic: imagesPath.ohne_blende});
        this.setState({productCodeOfBlende: 'X'})
    };

    chosenBlendeVoll = () => {
        this.setState({chosenBlende: 'VOLL'});
        this.setState({chosenBlendePic: imagesPath.mit_blende});
        this.setState({productCodeOfBlende: 'B'})
    };

    // KABEL CONFIGURATION

    chosenKabelRueckenMit = () => {
        this.setState({chosenKabel: 'MIT Kabelrücken'});
        this.setState({productCodeOfKabel: 'K'})
    };

    chosenKabelRueckenOhne = () => {
        this.setState({chosenKabel: 'OHNE Kabelrücken'});
        this.setState({productCodeOfKabel: 'X'})
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
        this.setState({productCodeOfTechnik: 'O'})
    };

    chosenTechnikContainerMit = () => {
        this.setState({chosenTechnikContainer: 'Mit Ladencontainer'});
        this.setState({productCodeOfContainer: 'C'})
    };

    chosenTechnikContainerOhne = () => {
        this.setState({chosenTechnikContainer: 'Ohne Ladencontainer'});
        this.setState({productCodeOfContainer: 'X'})
    };

    //Product Code

    //RESET

    handleReset = () => {
        this.setState(this.initialState)
    };

    handleSummary = () => {
        return (
            <Summary
                    chosenTable={this.state.chosenTable}
                    chosenMonitorNumber={this.state.chosenMonitorNumber}
                    chosenMonitorRow={this.state.chosenMonitorRow}
                    chosenMonitorSystem={this.state.chosenMonitorSystem}
                    chosenHeight={this.state.chosenHeight}
                    chosenBlende={this.state.chosenBlende}
                    chosenKabel={this.state.chosenKabel}
                    chosenTechnik={this.state.chosenTechnik}
                    chosenContainer={this.state.chosenTechnikContainer}
            />
        )
    };

    handleProduct() {
        return (
<></>

        );
    }


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
                    {/* <button className="navBtn done">START</button>
                    <div className="divider done"></div> */}

                    <Table
                        smallTable={this.loadTableSmall}
                        middleTable={this.loadTableMiddle}
                        largeTable={this.loadTableLarge}
                        chosen={this.state.chosenTable}
                    />

                    <Height
                        heightSettingEco={this.heightSettingEco}
                        heightSettingVario={this.heightSettingVario}
                        chosen={this.state.chosenHeight}
                    />

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
                        chosen={this.state.chosenMonitorSystem} /* this is probably a hack: in case the system is chosen highlight monitor */
                    >
                    </Monitor>

                    <Blende
                        chosenBlendeKeinen={this.chosenBlendeKeinen}
                        chosenBlendeVoll={this.chosenBlendeVoll}
                        chosen={this.state.chosenBlende}
                    />

                    <Kabel
                        chosenKabelRueckenMit={this.chosenKabelRueckenMit}
                        chosenKabelRueckenOhne={this.chosenKabelRueckenOhne}
                        chosen={this.state.chosenKabel}
                    />
                    
                    <Technik
                        chosenTechnikLinks={this.chosenTechnikLinks}
                        chosenTechnikRechts={this.chosenTechnikRechts}
                        chosenTechnikBeide={this.chosenTechnikBeide}
                        chosenTechnikOhne={this.chosenTechnikOhne}
                        chosenTechnikContainerMit={this.chosenTechnikContainerMit}
                        chosenTechnikContainerOhne={this.chosenTechnikContainerOhne}
                        chosen={this.chosenTechnik}
                    />
                    

                </div>
               <div className="summary">
                    {this.handleSummary()}
                </div>
                <div className="tourView">
                    <Product
                        chosenTablePic={this.state.chosenTablePic}
                        chosenMonitorPic={this.state.chosenMonitorPic}
                        chosenHeightPic={this.state.chosenHeightPic}
                    />

                    <ProductDisplay
                        table={this.state.chosenTable}
                    />

                    <ProductCode
                        table={this.state.chosenTable}
                    />
                </div>

            </>
       )
}

}

export default Settings;
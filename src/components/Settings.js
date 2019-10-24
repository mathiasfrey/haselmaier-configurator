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
        // Users select
        chosenTable: String,
        chosenTablePic: Array,
        chosenMonitorSystem: Number,
        chosenMonitorSystemPic: Array,
        chosenMonitorRow: Number,
        chosenMonitorRowPic: Array,
        chosenMonitorNumber: Number,
        chosenMonitorNumberPic: Array,
        chosenHeight: String,
        chosenHeightPic: Array,
        chosenBlende: String,
        chosenBlendePic: Array,
        chosenKabel: String,
        chosenKabelPic: Array,
        chosenTechnik: Number,
        chosenTechnikPic: Array,
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

        function matchMonitorSystem(code) {
            const monitorSystemsRegex = /[OSRH]/;
            if (code.match(monitorSystemsRegex)) {
                const monitorSystem = code.match(monitorSystemsRegex)[0];
                if (monitorSystem === 'S') {
                    monitorSystemPic = imagesPath.small_table;
                } else if (monitorSystem === 'O') {
                    monitorSystemPic = imagesPath.middle_table;
                } else if (monitorSystem === 'R') {
                    monitorSystemPic = imagesPath.large_table;
                } else if (monitorSystem === 'H') {
                    monitorSystemPic = null;
                }
                return {
                    'monitorSystem': monitorSystem,
                    'monitorSystemPic': 'monitorSystemPic',
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
                    monitorRowPic = imagesPath.monitorOneRow;
                } else {
                    monitorRowPic = imagesPath.monitorTwoRow;
                }
                return {
                    'monitorRow': monitorRow,
                    'monitorRowPic': monitorRowPic,
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
        var table, tablePic, monitorSystem, monitorSystemPic, monitorRow, monitorRowPic,
            monitorCount, monitorCountPic, kabel, kabelPic,
            height, heightPic, blende, blendePic, technik, technikPic;

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
        
        rv = matchMonitorSystem(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorSystem = rv.monitorSystem;
        monitorSystemPic = rv.monitorSystemPic;


        rv = matchMonitorRow(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorRow = rv.monitorRow;
        monitorRowPic = rv.monitorRowPic;

        //rv = matchMonitorCount(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorCount = rv.monitorCount;
        monitorCountPic = rv.monitorCountPic;


        //rv = matchHeight(rv.remainder);
        if (rv === false) {
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
        technikPic = rv.technikPic;


        this.setState(
            {
                chosenTable: table,
                chosenTablePic: tablePic,
                chosenHeight: height,
                chosenHeightPic: heightPic,
                chosenBlende: blende,
                chosenBlendePic: blendePic,
                chosenMonitorSystem: monitorSystem,
                chosenMonitorSystemPic: monitorSystemPic,
                chosenMonitorRow: monitorRow,
                chosenMonitorRowPic: monitorRowPic,
                chosenMonitorCount: monitorCount,
                chosenMonitorCountPic: monitorCountPic,
                chosenKabel: kabel,
                chosenKabelPic: kabelPic,
                chosenTechnik: technik,
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
        this.setState({chosenTable: 'S'});
        this.setState({productCodeOfTable: 'S'})
    };

    loadTableMiddle = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.middle_table});
        this.setState({chosenTable: 'M'});
        this.setState({productCodeOfTable: 'M'})
    };

    loadTableLarge = () => {
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: Array});
        this.setState({chosenTablePic: imagesPath.large_table});
        this.setState({chosenTable: 'L'});
        this.setState({productCodeOfTable: 'L'})
    };

    //HEIGHT CONFIGURATION

    heightSettingEco = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.eco});
        this.setState({chosenHeight: 'ECO'});
        this.setState({productCodeOfHeight: 'E'})
    };

    heightSettingVario = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: Array});
        this.setState({chosenHeightPic: imagesPath.vario});
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
                    chosenHeight={this.state.chosenHeight}
                    chosenBlende={this.state.chosenBlende}
                    chosenKabel={this.state.chosenKabel}
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
                    productCodeOfSystem={this.state.productCodeOfSystem}
                    productCodeOfRow={this.state.productCodeOfRow}
                    productCodeOfNumber={this.state.productCodeOfNumber}
                    productCodeOfHeight={this.state.productCodeOfHeight}
                    productCodeOfBlende={this.state.productCodeOfBlende}
                    productCodeOfKabel={this.state.productCodeOfKabel}
                    productCodeOfTechnik={this.state.productCodeOfTechnik}
                    productCodeOfContainer={this.state.productCodeOfContainer}
                />

        )
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
import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Height from "./Height";
import Technik from "./Technik";
import Kabel from "./Kabel";
import Summary from "./Summary";
import ProductDisplay from "./ProductDisplay";
import ProductCodeForm from './ProductCodeForm';
import ProductCode from './ProductCode';




class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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

        function matchHeight(code) {
            const heightRegex = /[EV]/;
            if (code.match(heightRegex)) {
                const height = code.match(heightRegex)[0];
                return {
                    'height': height,
                    'remainder': code.replace(heightRegex, '')
                }
            }
            return false;
        }

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

                return {
                    'monitor': monitor,
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
        var table, height, monitor;

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

        //rv = matchMonitorCount(rv.remainder);
       /* if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        monitorCount = rv.monitorCount;
        monitorCountPic = rv.monitorCountPic;*/


        rv = matchHeight(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        height = rv.height;

        /*//rv = matchBlende(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        blende = rv.blende;
        blendePic = rv.blendePic;*/

        //rv = matchKabel(rv.remainder);
        /*if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        kabel = rv.kabel;
        kabelPic = rv.kabelPic;*/

        //rv = matchTechnik(rv.remainder);
        /*if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        technik = rv.technik;
        technikPic = rv.technikPic;*/


        // 9 values will be set
        this.setState(
            {
                chosenTable: table,
                chosenHeight: height,
                // chosenTablePic: tablePic,
                chosenMonitor: monitor,
                // chosenMonitorPic: monitorPic,
            }
        );
    };

    //TABLE CONFIGURATION

    setTableState = (size) => {
        this.setState({chosenTable: size});
    };

    //HEIGHT CONFIGURATION

    setHeightState = (height) => {
        this.setState({chosenHeight: height});
    };

    //MONITOR CONFIGURATION

    setMonitorSystemState = (system) => {
        this.setState({chosenMonitorSystem: system});
    };

    setMonitorRowState = (row) => {
        this.setState({chosenMonitorRow: row});
    };

    setMonitorCountState = (count) => {
        this.setState({chosenMonitorCount: count})
    };

    //BLEND CONFIGURATION

    setBlendeState = (blende) => {
        this.setState({chosenBlende: blende});
    };


    // KABEL CONFIGURATION

    setKabelState = (kabel) => {
        this.setState({chosenKabel: kabel});
    };


    //TECHNIK CONFIGURATION

    setChosenTechnikSidesState = (sides) => {
        this.setState({chosenTechnikSide: sides});
    };


    setChosenTechnikContainerState = (container) => {
        this.setState({chosenTechnikContainer: container})
    };


    //RESET

    handleReset = () => {
        this.setState({})
    };

    handleSummary = () => {
        return (
            <Summary
                    chosenTable={this.state.chosenTable}
                    chosenMonitorCount={this.state.chosenMonitorCount}
                    chosenMonitorRow={this.state.chosenMonitorRow}
                    chosenMonitorSystem={this.state.chosenMonitorSystem}
                    chosenHeight={this.state.chosenHeight}
                    chosenBlende={this.state.chosenBlende}
                    chosenKabel={this.state.chosenKabel}
                    chosenTechnikSide={this.state.chosenTechnikSide}
                    chosenTechnikContainer={this.state.chosenTechnikContainer}
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
                        callback={this.setTableState}
                        chosen={this.state.chosenTable}
                    />

                    <Height
                        callback={this.setHeightState}
                        chosen={this.state.chosenHeight}
                    />

                    <Monitor
                        callbackSystem={this.setMonitorSystemState}
                        callbackRow={this.setMonitorRowState}
                        callbackCount={this.setMonitorCountState}
                        tableDependency={this.state.chosenTable} // Dependency for choosing the monitor size
                        chosen={this.state.chosenMonitorSystem} /* this is probably a hack: in case the system is chosen highlight monitor */
                    />
                    <Blende
                        callback={this.setBlendeState}
                        chosen={this.state.chosenBlende}
                    />

                    <Kabel
                        monitorDependency={['R', 'H'].includes(this.chosenMonitorSystem)} // only active if R or H
                        navDependency={! isNaN(this.chosenBlende)} // true if blende is chosen
                        callback={this.setKabelState}
                        chosen={this.state.chosenKabel}
                    />
                    
                    <Technik
                        callbackSide={this.setChosenTechnikSidesState}
                        callbackContainer={this.setChosenTechnikContainerState}
                        chosen={this.state.chosenTechnik}
                    />
                </div>
               <div className="summary">
                    {this.handleSummary()}
                </div>
                <div className="tourView">
                    <ProductDisplay
                        table={this.state.chosenTable}
                        height={this.state.chosenHeight}
                        monitorRow={this.state.chosenMonitorRow}
                        monitorCount={this.state.chosenMonitorCount}
                        monitorSystem={this.state.chosenMonitorSystem}
                        blende={this.state.chosenBlende}
                        cable={this.state.chosenKabel}
                        technikSide={this.state.chosenTechnikSide}
                        technikContainer={this.state.chosenTechnikContainer}
                    />
                    <ProductCode
                        table={this.state.chosenTable}
                        height={this.state.chosenHeight}
                        monitorRow={this.state.chosenMonitorRow}
                        monitorCount={this.state.chosenMonitorCount}
                        monitorSystem={this.state.chosenMonitorSystem}
                        blende={this.state.chosenBlende}
                        cable={this.state.chosenKabel}
                        technikSide={this.state.chosenTechnikSide}
                        technikContainer={this.state.chosenTechnikContainer}
                    />
                </div>

            </>
       )
}

}

export default Settings;
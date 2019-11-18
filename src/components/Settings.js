import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Blende from "./Blende";
import Height from "./Height";
import Technik from "./Technik";
import Summary from "./Summary";
import ProductDisplay from "./ProductDisplay";
import ProductCodeForm from './ProductCodeForm';
import ProductCode from './ProductCode';


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            this.buttonRef = React.createRef();
            this.tableRef = React.createRef();
            this.heightRef = React.createRef();
            this.monitorRef = React.createRef();
            this.blendeRef = React.createRef();
            this.technikRef = React.createRef();
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


        function matchMonitorSystem(code) {
            const monitorSystemsRegex = /[FHS]/;
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
            const monitorRowRegex = /[12]/;
            if (code.match(monitorRowRegex)) {
                const monitorRow = code.match(monitorRowRegex)[0];

                return {
                    'monitorRow': monitorRow,
                    'remainder': code.replace(monitorRowRegex, '')
                }
            }
            return false;
        }



       function matchBlende(code) {
           const blendeRegex = /[XB]/;
            if (code.match(blendeRegex)) {
                const blende = code.match(blendeRegex)[0];
                return {
                    'blende': blende,
                    'remainder': code.replace(blendeRegex, '')
                }
            }
            return false;
        }

       function matchTechnikSide(code) {
            const technikRegex = /[XEB]/;
            if (code.match(technikRegex)) {
                const technikSide = code.match(technikRegex)[0];
                return {
                    'technikSide': technikSide,
                    'remainder': code.replace(technikRegex, '')
                }
            }
            return false;
        }

       function matchTechnikContainer(code) {
            const technikRegex = /[XL]/;
            if (code.match(technikRegex)) {
                const technikContainer = code.match(technikRegex)[0];
                return {
                    'technikContainer': technikContainer,
                    'remainder': code.replace(technikRegex, '')
                }
            }
            return false;
        }


    
        var originalCode = code;
        var rv; // return value
        var table, height, monitorRow, monitorSystem,/*monitorCount*/
        blende, /*kabel*/ technikSide, technikContainer;

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

        rv = matchHeight(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        height = rv.height;


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
        monitorRow = rv.monitorRow;


        rv = matchBlende(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        blende = rv.blende;


        rv = matchTechnikSide(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        technikSide = rv.technikSide;

        rv = matchTechnikContainer(rv.remainder);
        if (rv === false) {
            codeAlertError(originalCode);
            return false;
        }
        technikContainer = rv.technikContainer;

        // 9 values will be set
        this.setState(
            {
                chosenTable: table,
                chosenHeight: height,
                chosenMonitorRow: monitorRow,
                chosenMonitorSystem: monitorSystem,
                // chosenMonitorCount: monitorCount,
                chosenBlende: blende,
                // chosenKabel: kabel,
                chosenTechnikSide: technikSide,
                chosenTechnikContainer: technikContainer

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

    /*setMonitorCountState = (count) => {
        this.setState({chosenMonitorCount: count})
    };*/

    //BLEND CONFIGURATION

    setBlendeState = (blende) => {
        this.setState({chosenBlende: blende});
    };


    // KABEL CONFIGURATION

   /* setKabelState = (kabel) => {
        this.setState({chosenKabel: kabel});
    };*/


    //TECHNIK CONFIGURATION

    setChosenTechnikSidesState = (sides) => {
        this.setState({chosenTechnikSide: sides});
    };


    setChosenTechnikContainerState = (container) => {
        this.setState({chosenTechnikContainer: container})
    };

    // NEXT CONFIGURATION

    handleClick = () => {
        var node = this.tableRef.current;
        var nodeHeight = this.heightRef.current;
        var nodeMonitor = this.monitorRef.current;
        var nodeBlende = this.blendeRef.current;
        var nodeTechnik = this.technikRef.current;
        var nodeButton = this.buttonRef.current;
        nodeButton.innerHTML = "Nächster Schritt ➤";
        if (this.state.chosenTechnikContainer) {
            nodeButton.style.visibility = 'hidden'
        } else if (this.state.chosenTable == null) {
            node.click()
        } else if (this.state.chosenHeight == null) {
            nodeHeight.click()
        } else if (this.state.chosenMonitorRow == null) {
            nodeMonitor.click()
        } else if (this.state.chosenBlende == null) {
            nodeBlende.click()
        } else  {
            nodeTechnik.click();
        }

    };

    render() {
      return (
            <div id="content-wrap">
                <div className="productcode">
                    <div>
                        <ProductCodeForm
                            callback={this.code2state}
                        />
                    </div>
                </div>
                <div className="settings">
                    <Table
                        tableRef={this.tableRef}
                        callback={this.setTableState}
                        chosenTable={this.state.chosenTable}
                    />
                    <Height
                        heightRef={this.heightRef}
                        navDependencyTable={this.state.chosenTable}
                        callback={this.setHeightState}
                        chosen={this.state.chosenHeight}
                    />
                    <Monitor
                        monitorRef={this.monitorRef}
                        navDependencyHeight={this.state.chosenHeight}
                        callbackSystem={this.setMonitorSystemState}
                        callbackRow={this.setMonitorRowState}
                        blendeState={this.setBlendeState}
                        // callbackCount={this.setMonitorCountState}
                        tableDependency={this.state.chosenTable} // Dependency for choosing the monitor size
                        chosen={this.state.chosenMonitorSystem} /* this is probably a hack: in case the system is chosen highlight monitor */
                        chosenRow={this.state.chosenMonitorRow}
                    />
                    <Blende
                        blendeRef={this.blendeRef}
                        monitorDependency={this.state.chosenMonitorSystem}
                        callback={this.setBlendeState}
                        chosen={this.state.chosenBlende}
                    />
                    <Technik
                        technikRef={this.technikRef}
                        navDependencyMonitor={this.state.chosenMonitorSystem}
                        navDependencyBlende={this.state.chosenBlende}
                        callbackSide={this.setChosenTechnikSidesState}
                        callbackContainer={this.setChosenTechnikContainerState}
                        chosenSide={this.state.chosenTechnikSide}
                        chosenContainer={this.state.chosenTechnikContainer}
                    />
                </div>
               <div className="summary">
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
                    <ProductCode
                        table={this.state.chosenTable}
                        height={this.state.chosenHeight}
                        monitorRow={this.state.chosenMonitorRow}
                        //monitorCount={this.state.chosenMonitorCount}
                        monitorSystem={this.state.chosenMonitorSystem}
                        blende={this.state.chosenBlende}
                        // cable={this.state.chosenKabel}
                        technikSide={this.state.chosenTechnikSide}
                        technikContainer={this.state.chosenTechnikContainer}
                    />
                </div>
                <div className="tourView">
                    <ProductDisplay
                        table={this.state.chosenTable}
                        height={this.state.chosenHeight}
                        monitorRow={this.state.chosenMonitorRow}
                        //monitorCount={this.state.chosenMonitorCount}
                        monitorSystem={this.state.chosenMonitorSystem}
                        blende={this.state.chosenBlende}
                        // cable={this.state.chosenKabel}
                        technikSide={this.state.chosenTechnikSide}
                        technikContainer={this.state.chosenTechnikContainer}
                    />

                </div>
                <br />

                <div className="footer-navigation">
                    <button className="btn btn-1 nextBtn" onClick={this.handleClick} ref={this.buttonRef}>
                        Jetzt konfigurieren ➤
                    </button>
                </div>

            </div>
       )
}

}

export default Settings;
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
    //Monitor
  monitorOneRow: <img src={table_four_monitors} height="500" width="600" alt="ref"/>,
  monitorTwoRow: <img src={table_eight_monitors} height="500" width="600" alt="ref"/>,
    //Height
  eco: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,
  vario: <img src={table_black_eight_monitors} height="500" width="600" alt="ref"/>,

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
        console.log(code, 'TTV gone');

        // code table
        const tableRegex = /[SML]/;
        if (code.match(tableRegex)) {
        } else {
            return false;
        }
        code = code.replace(tableRegex, '');
        console.log(code, 'M gone');

        /*var myString = "something format_abc";
        var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
        var match = myRegexp.exec(myString);
        console.log(match[1]); // abc*/

        /*var myString = "something format_abc";
        var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
        match = myRegexp.exec(myString);
        while (match != null) {
            // matched text: match[0]
            // match start: match.index
            // capturing group n: match[n]
            console.log(match[0])
            match = myRegexp.exec(myString);
        }*/

        /*const monitorSystemsRegex = /[OHSTRE]/;
        let match2 = monitorSystemsRegex.exec(code);
        while (match2 != null) {
            console.log(match2[0]);
            match2 = monitorSystemsRegex.exec(code);
        }
        code = code.replace(match2[0], '');
        console.log(code);*/

        // code Monitor Systems
        const monitorSystemsRegex = /[OHSTRE]/;
        /*const testRegex = monitorSystemsRegex.exec(code);
        console.log(testRegex);*/
        const array = [...code.matchAll(monitorSystemsRegex)];
        console.log(array[0]);
        console.log(array[1]);
        //const monitorSystems = monitorSystemsRegex.exec(code);
        code = code.replace(monitorSystemsRegex, '');
        console.log(code);



        /*
        TTV.MOHHV1EVMKLOL
         */
        //code Monitor Count
        /*const monitorCountRegex = /[12]/;
        if (code.match(monitorCountRegex)) {
            const monitorCount = code.match(monitorCountRegex)[0];
        } else {
            return false;
        }
        //console.log(code);

        //code Height
        const heightRegex = /[EV]/;
        if (code.match(heightRegex)) {
            const height = code.match(heightRegex)[0];
        } else {
            return false;
        }
        //console.log(code);

        //code Blende
        const blendeRegex = /[KVMKOK]/;
        if (code.match(blendeRegex)) {
            const blende = code.match(heightRegex)[0];
        } else {
            return false;
        }
        //console.log(code);

        //code Technik
        const technikRegex = /[LRBOTLCOL]/;
        if (code.match(technikRegex)) {
            const technik = code.match(heightRegex)[0];
        } else {
            return false;
        }
        //console.log(code);


        // result =>
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
        );
        */
    };

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
        this.setState({productCodeOfMonitor: 'REHV'})
    };

    monitorSystemReling = () => {
        this.setState({chosenMonitorSize: 'RELING'});
        this.setState({productCodeOfMonitor: 'RE'})
    };

    monitorOneRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorOneRow});
        this.setState({chosenMonitorRow: '1-reihig'});
        this.setState({productCodeOfMonitorRow: '1'})
    };

    monitorTwoRow = () => {
        this.setState({chosenTablePic: Array});
        this.setState({chosenMonitorPic: imagesPath.monitorTwoRow});
        this.setState({chosenMonitorRow: '2-reihig'});
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
                {this.code2state('TTV.MOHTV1EVMKLOL')}
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
                </div>
            </>
       )
}

}

export default Settings;
import React from 'react';
import Table from "./Table";
import Monitor from "./Monitor";
import Height from "./Height";
import Server from "./Server";
import Light from "./Light";
import Powerboards from "./Powerboards";
import Assembler from "./Assembler";


class Settings extends React.Component {

    render() {
      return (
            <>
                <div className="padding-left">
                <h2>Configure your own product </h2>
                </div>
                <div className="settings">
                <Table />
                <Monitor />
                <Server />
                <Height />
                <Light />
                <Powerboards />
                <Assembler />
                </div>
            </>
       )
}

}

export default Settings;
import React from 'react';


class Summary extends React.Component {


    render() {

        return (
            <div className="summary">
                <h4> Hi there, this is your configuration</h4>
                <h6> Table Size </h6>
                <h5>  - {this.props.chosenTable} </h5>
                <h6> Monitor Size </h6>
                <h5>  - {this.props.chosenMonitorSize} </h5>
                <h6> Server Size </h6>
                <h5>  - {this.props.chosenServerSize} </h5>
                <h6> Adjust height? </h6>
                <h5>  - {this.props.chosenHeight} </h5>
                <h6> Need Light? </h6>
                <h5>  - {this.props.chosenLight} </h5>
                <h6> Powerboards? </h6>
                <h5>  - {this.props.chosenPowerboard} </h5>
                <h6> Preferred Assembler? </h6>
                <h5>  - {this.props.chosenAssembler} </h5>
            </div>
        )
    }


}

export default Summary;
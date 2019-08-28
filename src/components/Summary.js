import React from 'react';


class Summary extends React.Component {


    render() {

        return (
            <div className="summary">
                <h4> Hi there, this is your configuration</h4>
                <h6> Table Size </h6>
                <h6> {this.props.chosenTable} {this.props.priceOfTable} € </h6>
                <h6> Monitor Size </h6>
                <h6> {this.props.chosenMonitorSize} </h6>
                <h6> Server Size </h6>
                <h6> {this.props.chosenServerSize} </h6>
                <h6> Adjust height? </h6>
                <h6> {this.props.chosenHeight} </h6>
                <h6> Need Light? </h6>
                <h6> {this.props.chosenLight} </h6>
                <h6> Powerboards? </h6>
                <h6> {this.props.chosenPowerboard} </h6>
                <h6> Preferred Assembler? </h6>
                <h6> {this.props.chosenAssembler} </h6>
                <h6> Total Account </h6>
            </div>
        )
    }


}

export default Summary;
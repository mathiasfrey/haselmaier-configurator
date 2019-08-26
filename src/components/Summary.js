import React from 'react';


class Summary extends React.Component {


    render() {

        return (
            <div className="summary">
                <h4> Hi there, this is your configuration</h4>
                <h5> Table Size </h5>
                {this.props.chosenTable} {this.props.priceOfTable} €
                <h5> Monitor Size </h5>
                {this.props.chosenMonitorSize}
                <h5> Server Size </h5>
                {this.props.chosenServerSize}
                <h5> Adjust height? </h5>
                {this.props.chosenHeight}
                <h5> Need Light? </h5>
                {this.props.chosenLight}
                <h5> Powerboards? </h5>
                {this.props.chosenPowerboard}
                <h5> Preferred Assembler? </h5>
                {this.props.chosenAssembler}
            </div>
        )
    }


}

export default Summary;
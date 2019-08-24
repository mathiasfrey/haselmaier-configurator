import React from 'react';


class Summary extends React.Component {

    render() {
        return (
            <div className="summary">
                <h4> Hi there, this is your configuration</h4>
                <h5> Table Size </h5>
                {this.props.chosenTable} {this.props.priceOfTable} €

            </div>
        )
    }


}

export default Summary;
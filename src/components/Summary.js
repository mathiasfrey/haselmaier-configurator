import React from 'react';



class Summary extends React.Component {

    handleProduct = (text) => {

        switch (text) {
            case 'table':
                this.props.chosenTable();
                break;
            case 'row':
                this.props.chosenMonitorRow();
                break;
            case 'system':
                this.props.chosenMonitorSystem();
                break;
            case 'number':
                this.props.chosenMonitorNumber();
                break;
            case 'height':
                this.props.chosenHeight();
                break;
            case 'blende':
                this.props.chosenBlende();
                break;
            case 'kabel':
                this.props.chosenKabelRuecken();
                break;
            case 'technik':
                this.props.chosenTechnik();
                break;
             case 'container':
                this.props.chosenContainer();
                break;
        }
    };

    render() {
        return (
            <div className="current_state summary">
            <h4> Mein Tisch (current state) </h4>
            <h6> Tischgröße </h6>
            <h5>  - {() => this.handleProduct('table')} </h5>
            <h6> Monitor Einstellung</h6>
            <h5>  - {() => this.handleProduct('row')} </h5>
            <h5>  - {() => this.handleProduct('system')} </h5>
            <h5> - {() => this.handleProduct('number')} Monitore</h5>
            <h6> Höhenverstellbar </h6>
            <h5>  - {() => this.handleProduct('height')} </h5>
            <h6> Gewünschte Blendeneinstellung </h6>
            <h5>  - {() => this.handleProduct('blende')} </h5>
            <h5> - {() => this.handleProduct('kabel')} </h5>
            <h6> Gewünschte Technik </h6>
            <h5>  - {() => this.handleProduct('technik')} </h5>
            <h5> - {() => this.handleProduct('container')} </h5>
            </div>
        );
    }


}

export default Summary;
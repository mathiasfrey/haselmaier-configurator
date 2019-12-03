import React from 'react';


class Summary extends React.Component {

    /*constructor(props) {
        super(props);
        // this.myRef = React.createRef()
    }*/

    loadTable = () => {
        if (this.props.chosenTable != null) {
            return (
                <>

            <h6> Tischgröße </h6>
            <h5>  - {this.props.chosenTable} </h5>
            </>
            )
        } else {
            return null
        }
    };

    loadHeight = () => {
        if (this.props.chosenHeight != null) {
            return (
                <>
                <h6> Höhenverstellbar </h6>
                <h5>  - {this.props.chosenHeight} </h5>
                </>
            )
        }
    };

    loadMonitor = () => {
        if (this.props.chosenMonitorRow && this.props.chosenMonitorSystem != null) {
            return (
                <>
                 <h6> Monitor Einstellung</h6>
                <h5>  - {this.props.chosenMonitorRow}</h5>
                <h5>  - {this.props.chosenMonitorSystem} </h5>
            </>
            )
        } else {
            return null
        }
    };

    loadBlende = () => {
        if (this.props.chosenBlende != null) {
            return (
                <>
                <h6> Gewünschte Blendeneinstellung </h6>
                <h5>  - {this.props.chosenBlende} </h5>
                    </>
            )
        }
    };

    loadTechnik = () => {
        if (this.props.chosenTechnikSide && this.props.chosenTechnikContainer != null) {
            return (
                <>
                    <h6> Gewünschte Technik </h6>
                    <h5> - {this.props.chosenTechnikSide} </h5>
                    <h5> - {this.props.chosenTechnikContainer} </h5>
                </>
            )
        }
    };


    render() {
        return (
            <>
            <div className="configuration">
                <h3> Konfiguration </h3>
                <br />
                {this.loadTable()}
                {this.loadHeight()}
                {this.loadMonitor()}
                {this.loadBlende()}
                {this.loadTechnik()}
            {/*<h5> - {this.props.chosenMonitorCount} Monitore</h5>*/}
            {/*<h5> - {this.props.chosenKabel} </h5>*/}
            </div>
            <div className="top">
                {/*<div onClick={this.handleClick}>*/}
                {/*<button ref={this.myRef}> NEXT </button>*/}
                {/*</div>*/}
            </div>
            </>
        );
    }

    /*handleClick = () => {
        var node = this.myRef.current;
        node.style.color = "blue"
    }*/




}

export default Summary;
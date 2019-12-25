import React from 'react';
import {Consumer} from "./Context";


class Summary extends React.Component {

    loadTable;
    loadHeight;
    loadMonitor;
    loadBlende;
    loadTechnik;


    render() {
        return (
            <Consumer>
                { context => (
                    this.loadTable = () => {
                        if (context.chosenTable != null) {
                            return (
                                <>

                            <h6> Tischgröße </h6>
                            <h5>  - {context.chosenTable} </h5>
                            </>
                            )
                        } else {
                            return null
                        }
                    },
                    this.loadHeight = () => {
                        if (context.chosenHeight != null) {
                            return (
                                <>
                                <h6> Höhenverstellbar </h6>
                                <h5>  - {context.chosenHeight} </h5>
                                </>
                            )
                        }
                     },
                    this.loadMonitor = () => {
                        if (context.chosenMonitorRow && context.chosenMonitorSystem != null) {
                            return (
                                <>
                                 <h6> Monitor Einstellung</h6>
                                <h5>  - {context.chosenMonitorRow}</h5>
                                <h5>  - {context.chosenMonitorSystem} </h5>
                            </>
                            )
                        } else {
                            return null
                        }
                    },
                    this.loadBlende = () => {
                        if (context.chosenBlende != null) {
                            return (
                                <>
                                <h6> Gewünschte Blendeneinstellung </h6>
                                <h5>  - {context.chosenBlende} </h5>
                                    </>
                            )
                        }
                    },
                    this.loadTechnik = () => {
                        if (context.chosenTechnikSide && context.chosenTechnikContainer != null) {
                            return (
                                <>
                                    <h6> Gewünschte Technik </h6>
                                    <h5> - {context.chosenTechnikSide} </h5>
                                    <h5> - {context.chosenTechnikContainer} </h5>
                                </>
                            )
                        }
                    },
                        <>
                        <div className="configuration">
                            <h3> Konfiguration </h3>
                            <br />
                            {this.loadTable()}
                            {this.loadHeight()}
                            {this.loadMonitor()}
                            {this.loadBlende()}
                            {this.loadTechnik()}
                        </div>
                        </>
                  )}
            </Consumer>
        );
    }

    /*handleClick = () => {
        var node = this.myRef.current;
        node.style.color = "blue"
    }*/




}

export default Summary;
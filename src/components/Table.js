import React, {Component} from 'react';
import tisch_video from '../assets/tisch_video.mp4';

class Table extends Component {


    handlingSmallTable = () => {
        this.props.smallTable();
    };

    handlingMiddleTable = () => {
        this.props.middleTable();
    };

    handlingLargeTable = () => {
        this.props.largeTable();
    };


    render() {

        return (
        <>
        <video autoPlay={false} height="300" width="500" controls playsinline="false">
        <source src={tisch_video} type="video/mp4"/>
        </video>
        <h2>Wähle deine Tischgröße</h2>
        <button className="btn btn-2 btn-2a" onClick={this.handlingSmallTable}> KLEIN (bis zu 3 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMiddleTable}> MITTEL (bis zu 4 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingLargeTable}> GROß (bis zu Monitore) </button>

        </>
        )
    }
}

export default Table;
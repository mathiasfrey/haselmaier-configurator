import React, {Component} from 'react';
import tisch_video from '../assets/tisch_video.mp4';
import Modal from "react-responsive-modal";

class Table extends Component {

    state = {
        open: false,
    };


    onOpenModal = () =>  {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    handlingSmallTable = () => {
        this.props.smallTable();
        this.setState({ open: false });
    };

    handlingMiddleTable = () => {
        this.props.middleTable();
        this.setState({ open: false });
    };

    handlingLargeTable = () => {
        this.props.largeTable();
        this.setState({ open: false });

    };

    render() {
        return (
        <>
        <button className="navBtn" onClick={this.onOpenModal}>1. Tisch</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Wähle deine Tischgröße</h2>
        <video autoPlay={true} height="300" width="500" controls playsinline={false}>
        <source src={tisch_video} type="video/mp4"/>
        </video>
        <button className="btn btn-2 btn-2a" onClick={this.handlingSmallTable}> KLEIN (bis zu 3 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMiddleTable}> MITTEL (bis zu 4 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingLargeTable}> GROß (bis zu Monitore) </button>
        {this.checkStateOfTable}
        </Modal>

        </>
        )
    }
}

export default Table;
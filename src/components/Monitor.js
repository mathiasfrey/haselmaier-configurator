import React from 'react';
import Modal from 'react-responsive-modal';
import {sizeNumber} from "./Settings";
import {rows} from "./Settings";


class Monitor extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingMonitorTwo = () => {
        this.setState({ open: false });
        this.props.monitorSize(sizeNumber['sizeTwo'])
    };
    handlingMonitorThree = () => {
        this.setState({ open: false });
        this.props.monitorSize(sizeNumber['sizeThree'])
    };
    handlingMonitorFour = () => {
        this.setState({ open: false });
        this.props.monitorSize(sizeNumber['sizeFour'])
    };

    handlingMonitorFive = () => {
        this.setState({ open: false });
        this.props.monitorSize(sizeNumber['sizeFive'])
    };

    handlingMonitorRowOne = () => {
        this.props.monitorRow(rows[0]);
    };

    handlingMonitorRowTwo = () => {
        this.props.monitorRow(rows[1]);
    };


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Monitor</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2> 1-reihig oder 2-reihig? </h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRowOne}> 1 - Reihig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRowTwo}> 2 - Reihig </button>
        </div>
        <h2>Monitorgröße</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorTwo}> Size: 2 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorThree}> Size: 3 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorFour}> Size: 4 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorFive}> Size: 5 </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;

import React from 'react';
import Modal from 'react-responsive-modal';
import {sizeNumber} from "./Settings";


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

    handlingMonitorOne = () => {
        this.setState({ open: false });
        this.props.monitorSize(sizeNumber['sizeOne'])
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


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Monitor</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Choose your number please</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorOne}> Size: 1 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorTwo}> Size: 2 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorThree}> Size: 3 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorFour}> Size: 4 </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;

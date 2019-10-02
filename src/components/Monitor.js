import React from 'react';
import Modal from 'react-responsive-modal';
import {monitorSystem} from "./Settings";
import monitor_video from '../assets/monitor_video.mp4';

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

    handlingMonitorNoSystem = () => {
        this.setState({ open: false });
        this.props.monitorSize(monitorSystem[0])
    };
    handlingMonitorSystem = () => {
        this.setState({ open: false });
        this.props.monitorSize(monitorSystem[1])
    };

    handlingMonitorRelingSystemNo = () => {
        this.setState({ open: false });
        this.props.monitorSize(monitorSystem[2])
    };

    handlingMonitorRelingSystem = () => {
        this.setState({ open: false });
        this.props.monitorSize(monitorSystem[3])
    };

    handlingMonitorRowOne = () => {
        this.props.monitorOneRow();
    };

    handlingMonitorRowTwo = () => {
        this.props.monitorTwoRow();
    };


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Monitortragsystem</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <h2> Monitortragsystem </h2>
         <video autoPlay="true" height="300" width="500" controls playsinline="false">
         <source src={monitor_video} type="video/mp4"/>
         </video>
        <h2> 1-reihig oder 2-reihig? </h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRowOne}> 1 - Reihig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRowTwo}> 2 - Reihig </button>
        </div>
        <h2>Monitorgröße</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorNoSystem}>1. OHNE </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorSystem}> 2. STATIVSYSTEM </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRelingSystemNo}>3. RELING: OHNE HV </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorRelingSystem}> 3. RELING: MIT HV </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;

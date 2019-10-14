import React from 'react';
import Modal from 'react-responsive-modal';
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

    handlingMonitorSystemWithout = () => {
        this.setState({ open: false });
        this.props.monitorSystemWithout();
        document.getElementById('kabel').style.color = '#D8D8D8';
        document.getElementById('kabel').disabled = true;
    };
    handlingMonitorSystemStativ = () => {
        this.setState({ open: false });
        this.props.monitorSystemStativ();
        document.getElementById('kabel').style.color = '#D8D8D8';
        document.getElementById('kabel').disabled = true;
    };

    handlingMonitorSystemRelingHv = () => {
        this.setState({ open: false });
        this.props.monitorSystemRelingHV();
        document.getElementById('kabel').style.color = '#A9A9A9';
        document.getElementById('kabel').disabled = false;
    };

    handlingMonitorSystemReling = () => {
        this.setState({ open: false });
        this.props.monitorSystemReling();
        document.getElementById('kabel').style.color = '#A9A9A9';
        document.getElementById('kabel').disabled = false;

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
        <h2>Monitorsystem</h2>
        <div>
        <button id="ohne" className="btn btn-2 btn-2a" onClick={this.handlingMonitorSystemWithout}>1. OHNE </button>
        <button id="stativ" className="btn btn-2 btn-2a" onClick={this.handlingMonitorSystemStativ}> 2. STATIVSYSTEM </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorSystemReling}>3. RELING: OHNE HV </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMonitorSystemRelingHv}> 4. RELING: MIT HV </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;

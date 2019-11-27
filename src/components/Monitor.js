import React from 'react';
import Modal from 'react-responsive-modal';
import monitor_video from '../assets/monitor_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";

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

    handleMonitorSystem = (system) => {

        if (this.props.chosenRow != null) {
            if (system === 'F' || system === 'H') {
               this.props.callbackSystem(system);
               this.setState({open: false})
            } else {
                this.props.callbackSystem(system);
                this.setBlendeState('X');
                this.setState({open: false})
            }
        } else {
            alert('1-reihig oder 2-reihig? 🌟')
        }

    };


    // Set Blende State to 'X' (default status when choosing MonitorSystem: S or X) - Fixed Length of ProductCode
    setBlendeState = (blende) => {
        this.props.blendeState(blende)
    };

    /*handleMonitorCount = (count) => {
        this.props.callbackCount(count);
    };*/

    handleMonitorRow = (row) => {
        this.props.callbackRow(row);
    };


    loadPreviewImages = (images) => {
        switch(images) {
            case 'reling':
                return ModalImagesPath.reling;
            case 'stativ':
                return ModalImagesPath.stativ;
            case 'reling_hv':
                return ModalImagesPath.reling_hv;
            case 'ohne':
                return ModalImagesPath.small_table;
            case 'one_row':
                return ModalImagesPath.one_row;
            case 'two_row':
                return ModalImagesPath.two_row;
            default:
                return ModalImagesPath.stativ
        }
    };

    renderMonitorButton = () => {
        var disabled = true;
        if (this.props.navDependencyHeight != null) {
            disabled = false
        } else {
            disabled = true
        }
        return (
            <>
            <button ref={this.props.monitorRef}
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal} disabled={disabled}>3. Monitortragsystem</button>
            <div className={'divider ' + (this.props.chosen && 'done')} />
        </>
        )
    };


    render() {
        return (
        <>
        {this.renderMonitorButton()}
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2> Monitortragsystem </h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
             <source src={monitor_video} type="video/mp4"/>
        </video>

        <div className="row">
         <h2> 1-reihig oder 2-reihig? </h2>
        <div className="column">
            <button className="border-white" onClick={() => this.handleMonitorRow('1')}>{this.loadPreviewImages('one_row')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorRow('1')}> 1 - Reihig </button>
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleMonitorRow('2')}>{this.loadPreviewImages('two_row')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorRow('2')}> 2 - Reihig </button>
        </div>
        </div>
        <h2>Monitorsystem</h2>
        {/*<div className="column">
            {this.loadPreviewImages('ohne')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('X')}>1. OHNE </button>
        </div>*/}
            {/*<br />*/}
        <div className="column">
            <button className="border-white" onClick={() => this.handleMonitorSystem('S')}>{this.loadPreviewImages('stativ')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('S')}> 1. STATIVSYSTEM </button>
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleMonitorSystem('F')}>{this.loadPreviewImages('reling')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('F')}>2. RELING: OHNE HV </button>
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleMonitorSystem('H')}>{this.loadPreviewImages('reling_hv')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('H')}> 3. RELING: MIT HV </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;

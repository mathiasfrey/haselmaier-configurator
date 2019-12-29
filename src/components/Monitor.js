import React from 'react';
import Modal from 'react-responsive-modal';
import monitor_video from '../assets/monitor_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";
import { Consumer } from "./Context";


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

    /*handleMonitorCount = (count) => {
        this.props.callbackCount(count);
    };*/

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

    handleMonitorRow;
    handleMonitorSystem;
    renderMonitorButton;
    setBlendeState;


    render() {
        return (
            <Consumer>
                { context => (
                    this.handleMonitorSystem = (system) => {
                        if (context.chosenMonitorRow != null) {
                            if (system === 'F' || system === 'H') {
                               context.actions.monitorSystemState(system);
                               this.setState({open: false})
                            } else {
                                context.actions.monitorSystemState(system);
                                this.setBlendeState('X');
                                this.setState({open: false})
                            }
                        } else {
                            alert('1-reihig oder 2-reihig? 🌟')
                        }
                        // eslint-disable-next-line
                    },

                    this.handleMonitorRow = (row) => {
                        context.actions.monitorRowState(row);
                    },

                    this.renderMonitorButton = () => {
                        let disabled = true;
                        if (context.chosenHeight != null) {
                            disabled = false
                        } else {
                            disabled = true
                        }
                        return (
                            <>
                            <button ref={this.props.monitorRef}
                            className={ 'navBtn ' + (context.chosenMonitorSystem && 'done')}
                            onClick={this.onOpenModal} disabled={disabled} data-cy="monitor">3. Monitortragsystem</button>
                            <div className={'divider ' + (context.chosenMonitorSystem && 'done')} />
                            </>
                        )
                     },
                    // Set Blende State to 'X' (default status when choosing MonitorSystem: S or X) - Fixed Length of ProductCode
                    this.setBlendeState = (blende) => {
                        context.actions.blendeState(blende)
                    },

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
                            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorRow('1')} data-cy="1"> 1 - Reihig </button>
                        </div>
                        <div className="column">
                            <button className="border-white" onClick={() => this.handleMonitorRow('2')}>{this.loadPreviewImages('two_row')}</button>
                            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorRow('2')} data-cy="2"> 2 - Reihig </button>
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
                            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('S')} data-cy="SM"> 1. STATIVSYSTEM </button>
                        </div>
                        <div className="column">
                            <button className="border-white" onClick={() => this.handleMonitorSystem('F')}>{this.loadPreviewImages('reling')}</button>
                            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('F')} data-cy="F">2. RELING: OHNE HV </button>
                        </div>
                        <div className="column">
                            <button className="border-white" onClick={() => this.handleMonitorSystem('H')}>{this.loadPreviewImages('reling_hv')}</button>
                            <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('H')} data-cy="H"> 3. RELING: MIT HV </button>
                        </div>
                        </Modal>
                        </>
                    )}
            </Consumer>
        )
    }
}

export default Monitor;

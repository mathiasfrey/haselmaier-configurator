import React from 'react';
import Modal from 'react-responsive-modal';
import { heightDecision } from "./Settings";
import hv_video from '../assets/hv_video.mp4';


class Height extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingHeightECO = () => {
        this.setState({ open: false });
        this.props.heightSetting(heightDecision[0])
    };

    handlingHeightVARIO = () => {
        this.setState({ open: false });
        this.props.heightSetting(heightDecision[1])
    };


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Höhenverstellbar</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Höhenverstellbar</h2>
        <video autoPlay="true" height="300" width="500" controls playsInline="false">
        <source src={hv_video} type="video/mp4"/>
        </video>
        <h2>Treffen Sie Ihre Auswahl</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingHeightECO}> ECO </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingHeightVARIO}> VARIO </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Height;
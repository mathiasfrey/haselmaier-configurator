import React from 'react';
import Modal from 'react-responsive-modal';
import hv_video from '../assets/hv_video.mp4';
import {ModalImagesPath} from "./ImageHandler";


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

    handleHeight = (height) => {
        this.setState({ open: false});
        if (height === 'ECO') {
            this.props.heightSettingEco();
        } else {
            this.props.heightSettingVario();
        }
    };

    loadHeight = (height) => {
        switch (height) {
            case 'ECO':
                return ModalImagesPath.small_table;
            // case 'VARIO':
            default:
                return ModalImagesPath.small_table;
        }
    };


    render() {
        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>2. Höhenverstellbar</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>
        
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Höhenverstellbar</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={hv_video} type="video/mp4"/>
        </video>
            <div>
            {this.loadHeight('ECO')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('ECO')}> ECO </button>
            </div>
            <div>
            {this.loadHeight('VARIO')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('VARIO')}> VARIO </button>
            </div>
        </Modal>
        </>
        )
    }
}

export default Height;

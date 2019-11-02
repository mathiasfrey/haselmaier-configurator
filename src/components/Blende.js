import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import blende_video from '../assets/blende_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";


class Blende extends Component {
    state = {
        open: false,
        disable: false
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleBlende = (blende) => {
        this.props.callback(blende);
        this.setState({ open: false});
    };

    loadPreviewImage = (image) => {
        switch (image) {
            case 'X':
                return ModalImagesPath.ohne_blende;
            case 'B':
                return ModalImagesPath.mit_blende;
            default:
                return ModalImagesPath.ohne_blende
        }
    };

    renderBlendeButton = () => {

        var disabled = true;
        if (this.props.monitorDependency != null) {
            disabled = false
        }
        if (this.props.monitorDependency === 'X') {
            disabled = true;
        } else if (this.props.monitorDependency === 'S') {
            disabled = true;
        }

        return (
            <>
            <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal} disabled={disabled}>4. Blende</button>
            <div className={'divider ' + (this.props.chosen && 'done')} />
            </>
        )
    };



    render() {
        return (
        <>
        {this.renderBlendeButton()}
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={blende_video} type="video/mp4"/>
        </video>
        <h2>Gewünschte Blendeneinstellung</h2>
        <div>
            {this.loadPreviewImage('X')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('X')}> Keinen </button>
        </div>
        <div>
            {this.loadPreviewImage('B')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('B')}> Voller Blendschutz </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;
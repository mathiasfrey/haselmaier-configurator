import React from 'react';
import Modal from 'react-responsive-modal';
import hv_video from '../assets/hv_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";

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
        this.props.callback(height)
    };

    loadPreviewImages = (images) => {
        switch (images) {
            case 'E':
                return ModalImagesPath.eco;
            case 'V':
                return ModalImagesPath.vario;
            default:
                return ModalImagesPath.eco
        }
    };

    renderHeightButton = () => {
        var disabled = true;
        if (this.props.navDependencyTable != null) {
            disabled = false
        } else {
            disabled = true
        }
        return (
            <>
            <button ref={this.props.heightRef}
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal} disabled={disabled}>2. Höhenverstellbar</button>
            <div className={'divider ' + (this.props.chosen && 'done')} />
            </>
        )
    };

    render() {
        return (
        <>
       {this.renderHeightButton()}
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Höhenverstellbar</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={hv_video} type="video/mp4"/>
        </video>
            <div className="row">
            <div className="column">
                <button className="border-white" onClick={() => this.handleHeight('E')}>{this.loadPreviewImages('E')}</button>
                <br />
                <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('E')}> ECO </button>
            </div>
            <div className="column">
                <button className="border-white" onClick={() => this.handleHeight('V')}>{this.loadPreviewImages('V')}</button>
                <br />
                <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('V')}> VARIO </button>
            </div>
            </div>
        </Modal>
        </>
        )
    }
}

export default Height;

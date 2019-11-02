import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";

class Technik extends React.Component {
    state = {
        open: false,
        disabled: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleTechnikSide = (sides) => {
        this.props.callbackSide(sides)
    };


    handleContainer = (container) => {
        this.props.callbackContainer(container);
        // this.setState({ open: false })
    };

    renderContainerButton(container) {
        var disabled = false;
        if (this.props.chosenSide === 'B') {
            disabled = true;
        }
        return (
            <button className="btn btn-2 btn-2a"
            onClick={() => this.handleContainer(container)} disabled={disabled}> {container} Container </button>
        )
    }

    loadPreviewImage = (image) => {
        switch (image) {
            case 'E':
                return ModalImagesPath.einseitig;
            case 'B':
                return ModalImagesPath.beidseitig;
            case 'XSide':
                return ModalImagesPath.two_row;
            case 'L':
                return ModalImagesPath.mit_container;
            case 'XContainer':
                return ModalImagesPath.ohne_container
            default:
                return ModalImagesPath.two_row;
        }
    };


    render() {
        return (
        <>

        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>5. Technik</button>
        <div className={'divider ' + (this.props.chosen && 'done')} />
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={technik_video} type="video/mp4"/>
        </video>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
            {this.loadPreviewImage('E')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('E')}> Einseitig </button>
        </div>
        <div>
            {this.loadPreviewImage('B')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('B')}> Beidseitig </button>
        </div>
        <div>
            {this.loadPreviewImage('XSide')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('X')}> Ohne </button>
        </div>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
            {this.loadPreviewImage('L')}
            {this.renderContainerButton('L')}
        </div>
        <div>
            {this.loadPreviewImage('XContainer')}
            {this.renderContainerButton('X')}
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

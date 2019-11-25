import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";

class Technik extends React.Component {
    state = {
        open: false,
    };




    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleTechnikSide = (sides) => {
        if (sides === 'E' || sides === 'X') {
            this.props.callbackSide(sides)
        } else {
            this.props.callbackSide(sides);
            this.setContainerState('X');
            this.setState({open: false})

        }

    };

    // Set Container State to 'X' (default status when choosing TechnikSide: B) - Fixed Length of ProductCode
    setContainerState = (container) => {
        this.props.callbackContainer(container)
    };


    handleContainer = (container) => {
        if (this.props.chosenSide != null) {
           this.props.callbackContainer(container);
           this.setState({ open: false })
        } else {
            alert('Bitte wählen Sie zuerst den Technikraum 🌟 ')
        }

    };

    renderContainerButton(container, text) {
        var disabled = true;
        if (this.props.chosenSide === 'B') {
            disabled = true;
        } else {
            disabled = false;
        }
        return (
            <>
            <button className="btn btn-2 btn-2a"
            onClick={() => this.handleContainer(container)} disabled={disabled}> {container} {text}
            </button>
            </>

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
                return ModalImagesPath.ohne_container;
            default:
                return ModalImagesPath.two_row;
        }
    };

    renderTechnikButton = () => {
        var disabled = true;
        if (this.props.navDependencyBlende == null) {
            disabled = true
        } else disabled = false;

        return (
            <>
            <button ref={this.props.technikRef}
            className={ 'navBtn ' + (this.props.chosenSide && this.props.chosenContainer && 'done')}
            onClick={this.onOpenModal} disabled={disabled}>5. Technik</button>
            <div className={'divider ' + (this.props.chosenSide && this.props.chosenContainer && 'done')} />
            </>
        )
    };


    render() {
        return (
        <>
        {this.renderTechnikButton()}
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={technik_video} type="video/mp4"/>
        </video>
        <h2> Auswahl Technikraum </h2>
        <div className="row">
        <div className="column">
            <button className="border-white" onClick={() => this.handleTechnikSide('E')}>{this.loadPreviewImage('E')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('E')}> Einseitig </button>
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleTechnikSide('B')}>{this.loadPreviewImage('B')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('B')}> Beidseitig </button>
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleTechnikSide('X')}>{this.loadPreviewImage('XSide')}</button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('X')}> Ohne </button>
        </div>
       </div>
        <h2> Ladencontainer </h2>
        <div className="row">
        <div className="column">
            <button className="border-white" onClick={() => this.handleContainer('L')}>{this.loadPreviewImage('L')}</button>
            {this.renderContainerButton('L', '(Mit Ladencontainer)')}
        </div>
        <div className="column">
            <button className="border-white" onClick={() => this.handleContainer('X')}>{this.loadPreviewImage('XContainer')}</button>
            {this.renderContainerButton('X', '(Ohne Ladencontainer)')}
        </div>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

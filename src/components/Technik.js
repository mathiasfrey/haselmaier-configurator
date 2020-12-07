import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";
import { Consumer } from "./Context";


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


    handleTechnikSide;
    handleContainer;
    setContainerState;
    renderTechnikButton;

    render() {
        return (
            <Consumer>
                { context => (

                    this.handleTechnikSide = (sides) => {
                        if (sides === 'E' || sides === 'X') {
                            context.actions.technikSideState(sides)
                        } else {
                            context.actions.technikSideState(sides);
                            this.setContainerState('X');
                            this.setState({open: false})
                        }
                        // eslint-disable-next-line
                    },
                    this.handleContainer = (container) => {
                        if (context.chosenTechnikSide != null) {
                           context.actions.technikContainerState(container);
                           this.setState({ open: false })
                        } else {
                            alert('Bitte wählen Sie zuerst den Technikraum 🌟 ')
                        }
                    },

                    // Set Container State to 'X' (default status when choosing TechnikSide: B) - Fixed Length of ProductCode
                    this.setContainerState = (container) => {
                        context.actions.technikContainerState(container)
                    },
                    this.renderTechnikButton = () => {
                        let disabled = true;
                        if (context.chosenBlende == null) {
                            disabled = true
                        } else disabled = false;

                        return (
                            <>
                            <button ref={this.props.technikRef}
                            className={ 'navBtn ' + (context.chosenTechnikSide && context.chosenTechnikContainer && 'done')}
                            onClick={this.onOpenModal} disabled={disabled} data-cy="technik">5. Technik</button>
                            <div className={'divider ' + (context.chosenTechnikSide && context.chosenTechnikContainer && 'done')} />
                            </>
                        )
                    },

                    this.renderContainerButton = (container, text) => {
                        let disabled = true;
                        if (context.chosenTechnikSide === 'B') {
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
                    },
                    <>
                        {this.renderTechnikButton()}
                        <Modal open={this.state.open} onClose={this.onCloseModal} center>
                                <h2>Technik</h2>
                                <video autoPlay={false} height="300" width="500" controls playsInline={false}>
                                    <source src={technik_video} type="video/mp4"/>
                                </video>
                                <h2> Auswahl Technikraum </h2>
                                <div className="row">
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTechnikSide('E')}>{this.loadPreviewImage('E')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('E')} data-cy="ET"> Einseitig </button>
                                    </div>
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTechnikSide('B')}>{this.loadPreviewImage('B')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('B')} data-cy="BT"> Beidseitig </button>
                                    </div>
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTechnikSide('X')}>{this.loadPreviewImage('XSide')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('X')} data-cy="XT"> Ohne </button>
                                    </div>
                               </div>
                                <h2> Auswahl Ladencontainer </h2>
                                <div className="row">
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleContainer('L')} data-cy="ML">{this.loadPreviewImage('L')}</button>
                                        {this.renderContainerButton('L', '(Mit Ladencontainer)')}
                                    </div>
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleContainer('X')} data-cy="XL">{this.loadPreviewImage('XContainer')}</button>
                                        {this.renderContainerButton('X', '(Ohne Ladencontainer)')}
                                    </div>
                                </div>
                        </Modal>
                        </>
                )}
            </Consumer>
        )
    }

}

export default Technik;

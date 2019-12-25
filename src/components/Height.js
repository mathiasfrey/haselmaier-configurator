import React from 'react';
import Modal from 'react-responsive-modal';
import hv_video from '../assets/hv_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";
import { Consumer } from "./Context";


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



    handleHeight;
    renderHeightButton;

    render() {
        return (
            <Consumer>
                { context => (

                    this.handleHeight = (height) => {
                        this.setState({ open: false});
                        context.actions.heightState(height)
                    },
                        this.renderHeightButton = () => {
                            let disabled = true;
                            if (context.chosenTable != null) {
                                disabled = false
                            } else {
                                disabled = true
                            }
                            return (
                                <>
                                <button ref={this.props.heightRef}
                                className={ 'navBtn ' + (context.chosenHeight && 'done')}
                                onClick={this.onOpenModal} disabled={disabled} data-cy="height">2. Höhenverstellbar</button>
                                <div className={'divider ' + (context.chosenHeight && 'done')} />
                                </>
                            )
                    },
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
                                    <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('E')} data-cy="E"> ECO </button>
                                </div>
                                <div className="column">
                                    <button className="border-white" onClick={() => this.handleHeight('V')}>{this.loadPreviewImages('V')}</button>
                                    <br />
                                    <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('V')} data-cy="V"> VARIO </button>
                                </div>
                                </div>
                            </Modal>
                            </>
                )}
            </Consumer>
        )
    }
}

export default Height;

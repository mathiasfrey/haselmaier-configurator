import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import blende_video from '../assets/blende_video.mp4';
import {ModalImagesPath} from "./PreviewImageHandler";
import { Consumer } from "./Context";



class Blende extends Component {
    state = {
        open: false,
        disable: false
    };



    onCloseModal = () => {
    this.setState({ open: false });
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


    handleBlende;
    renderBlendeButton;


    render() {
        return (
            <Consumer>
                { context => (

                    this.handleBlende = (blende) => {
                       context.actions.blendeState(blende);
                       this.setState({ open: false});
                       // eslint-disable-next-line
                    },

                       this.onOpenModal = () => {
                        if (context.chosenMonitorSystem === 'S') {
                             alert('Stativsystem gewählt, keine Blendeneinstellung möglich 😉');
                             this.setState({open: false})
                        } else {
                            this.setState({ open: true });
                        }

                        },

                    this.renderBlendeButton = () => {
                        var disabled = true;
                        if (context.chosenMonitorSystem != null) {
                            disabled = false
                        }
                        return (
                            <>
                            <button ref={this.props.blendeRef}
                            className={ 'navBtn ' + (context.chosenBlende && 'done')}
                            onClick={this.onOpenModal} disabled={disabled} data-cy="blende">4. Blende</button>
                            <div className={'divider ' + (context.chosenBlende && 'done')} />
                            </>
                        )
                    },
                    <>
                        {this.renderBlendeButton()}
                        <Modal open={this.state.open} onClose={this.onCloseModal} center>
                                <h2>Blende</h2>
                                <video autoPlay={false} height="300" width="500" controls playsInline={false}>
                                    <source src={blende_video} type="video/mp4"/>
                                </video>
                                    <div className="row">
                                        <div className="column">
                                            <button className="border-white" onClick={() => this.handleBlende('X')}>{this.loadPreviewImage('X')}</button>
                                            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('X')} data-cy="XB"> Keinen </button>
                                        </div>
                                        <div className="column">
                                            <button className="border-white" onClick={() => this.handleBlende('B')}>{this.loadPreviewImage('B')}</button>
                                            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('B')} data-cy="B"> Voller Blendschutz </button>
                                        </div>
                                    </div>
                        </Modal>
                     </>
                    )}
            </Consumer>
        )
    }

}

export default Blende;

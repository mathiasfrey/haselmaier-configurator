import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import blende_video from '../assets/blende_video.mp4';



class Blende extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingBlendeOhne = () => {
        this.setState({ open: false });
        this.props.chosenBlendeKeinen()
    };

    handlingBlendeVoll = () => {
        this.setState({ open: false });
        this.props.chosenBlendeVoll()
    };



    render() {
        return (
        <>
        <button id="blende" className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Blende</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <video autoPlay="true" height="300" width="500" controls playsinline="false">
        <source src={blende_video} type="video/mp4"/>
        </video>
        <h2>Gewünschte Blendeneinstellung</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeOhne}> Keinen </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeVoll}> Voller Blendschutz </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;
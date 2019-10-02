import React from 'react';
import Modal from 'react-responsive-modal';
import {sides} from "./Settings";
import technik_video from '../assets/technik_video.mp4';

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

    handlingTechnikLeft = () => {
        this.setState({ open: false });
        this.props.chosenTechnik(sides[0]);
    };
    handlingTechnikRight = () => {
        this.setState({ open: false });
        this.props.chosenTechnik(sides[1]);
    };
    handlingTechnikBoth = () => {
        this.setState({ open: false });
        this.props.chosenTechnik(sides[2]);
    };
    handlingWithoutTechnik = () => {
        this.setState({ open: false });
        this.props.chosenTechnik(sides[3]);
    };




    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Technik</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay="true" height="300" width="500" controls playsInline="false">
        <source src={technik_video} type="video/mp4"/>
        </video>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikLeft}> Linksseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikRight}> Rechtsseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikBoth}> Beidseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingWithoutTechnik}> Ohne </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

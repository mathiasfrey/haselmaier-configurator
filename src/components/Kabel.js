import React from 'react';
import Modal from 'react-responsive-modal';
import { cableDecision } from "./Settings";


class Kabel extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingKabelWithout = () => {
        this.setState({ open: false });
        this.props.kabelSize(cableDecision[0])
    };

    handlingKabelIntegrated = () => {
        this.setState({ open: false });
        this.props.kabelSize(cableDecision[1])
    };


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Kabel</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Kabelführung</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelWithout}> Ohne </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelIntegrated}> Voll integriert </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Kabel;

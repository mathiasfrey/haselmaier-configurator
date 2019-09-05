import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {decision} from "./Settings";


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

    handlingBlendeOne = () => {
        this.setState({ open: false });
        this.props.chosenBlende(decision[0])
    };

    handlingBlendeTwo = () => {
        this.setState({ open: false });
        this.props.chosenBlende(decision[1])
    };

    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Blende</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Gewünschte Blendeneinstellung?</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeOne}> Yes </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeTwo}> No </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;
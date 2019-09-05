import React from 'react';
import Modal from 'react-responsive-modal';
import {decision} from "./Settings";

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

    handlingTechnikOne = () => {
        this.setState({ open: false });
        this.props.chosenLight(decision[0])
    };

    handlingTechnikTwo = () => {
        this.setState({ open: false });
        this.props.chosenLight(decision[0])
    };

    //test

    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Technik</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Gewünschte Technik?</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikOne}> Yes </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikTwo}> No </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

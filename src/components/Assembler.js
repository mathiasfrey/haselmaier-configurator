import React from 'react';
import Modal from 'react-responsive-modal';
import {assembler} from "./Settings";


class Assembler extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Assembler</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Who is your preferred assembler?</h2>
        <span role="img" aria-label="assembler">
        <button className="btn btn-2 btn-2a" onClick={() => this.props.chosenAssembler(assembler[0])}> ‍Harry </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.props.chosenAssembler(assembler[1])}> Spax </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.props.chosenAssembler(assembler[2])}> Lukas </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.props.chosenAssembler(assembler[3])}> Kieflandi </button>
        </span>
        </Modal>
        </>
        )
    }
}

export default Assembler;

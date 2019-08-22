import React from 'react';
import Modal from 'react-responsive-modal';


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
        <button className="btn btn-2 btn-2a"> ‍Harry </button>
        <button className="btn btn-2 btn-2a"> Spax </button>
        <button className="btn btn-2 btn-2a"> Lukas </button>
        <button className="btn btn-2 btn-2a"> Kieflandi </button>
        </span>
        </Modal>
        </>
        )
    }
}

export default Assembler;

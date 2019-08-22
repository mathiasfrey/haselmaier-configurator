import React from 'react';
import Modal from 'react-responsive-modal';

class Light extends React.Component {
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
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Light</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Do you prefer a light system?</h2>
        <div>
        <button className="btn btn-2 btn-2a"> Yes </button>
        <button className="btn btn-2 btn-2a"> No </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Light;

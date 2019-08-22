import React, {Component} from 'react';
import Modal from 'react-responsive-modal';


class Height extends Component {
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
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Height</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Would you like to adjust your height?</h2>
        <div>
        <button className="btn btn-2 btn-2a"> Yes </button>
        <button className="btn btn-2 btn-2a"> No </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Height;
import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {decision} from "./Settings";


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
        <button className="btn btn-2 btn-2a" onClick={() => this.props.adjustHeight(decision[0])}> Yes </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.props.adjustHeight(decision[1])}> No </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Height;
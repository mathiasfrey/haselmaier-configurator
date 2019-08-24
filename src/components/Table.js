import React, {Component} from 'react';
import Modal from 'react-responsive-modal';

class Table extends Component {

    state = {
        openTable: false,
    };

     onOpenModal = () => {
    this.setState({ openTable: true });
    };

    onCloseModal = () => {
    this.setState({ openTable: false });
    };

    render() {

        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Table</button>
        <Modal open={this.state.openTable} onClose={this.onCloseModal} center>
        <h2>Choose your size please</h2>
        <button className="btn btn-2 btn-2a" onClick={this.props.smallTable}> Size: S </button>
        <button className="btn btn-2 btn-2a" onClick={this.props.middleTable}> Size: M </button>
        <button className="btn btn-2 btn-2a" onClick={this.props.largeTable}> Size: L </button>
        </Modal>

        </>
        )
    }
}

export default Table;
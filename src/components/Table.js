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
        <div>
        <button className="btn btn-2 btn-2a"> Size: S </button>
        <button className="btn btn-2 btn-2a"> Size: M </button>
        <button className="btn btn-2 btn-2a"> Size: L </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Table;
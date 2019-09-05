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

    handlingSmallTable = () => {
        this.props.smallTable();
        this.setState({ openTable: false })
    };

    handlingMiddleTable = () => {
        this.props.middleTable();
        this.setState( { openTable: false})
    };

    handlingLargeTable = () => {
        this.props.largeTable();
        this.setState({ openTable: false})
    };


    render() {

        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Tisch</button>
        <Modal open={this.state.openTable} onClose={this.onCloseModal} closeOnOverlayClick={true} center>
        <h2>Choose your size please</h2>
        <button className="btn btn-2 btn-2a" onClick={this.handlingSmallTable}> Size: S </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMiddleTable}> Size: M </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingLargeTable}> Size: L </button>
        </Modal>

        </>
        )
    }
}

export default Table;
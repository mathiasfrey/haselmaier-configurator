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
        <h2>Wähle deine Tischgröße</h2>
        <button className="btn btn-2 btn-2a" onClick={this.handlingSmallTable}> KLEIN (bis zu 3 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingMiddleTable}> MITTEL (bis zu 4 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingLargeTable}> GROß (bis zu Monitore) </button>
        </Modal>

        </>
        )
    }
}

export default Table;
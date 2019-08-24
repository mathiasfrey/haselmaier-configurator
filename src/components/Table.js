import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import table_small from '../assets/table_small.jpg'
import table_middle from '../assets/table_middle.jpeg'
import table_large from '../assets/table_large.jpg'

const imagesPath = {
  small_table: table_small,
  middle_table: table_middle,
  large_table: table_large,
};


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

    loadTableSmall = () => {
        const imageName = 'small_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_small" />
        </div>
        )
    };

    loadTableMiddle = () => {
        const imageName = 'middle_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_middle" />
        </div>
        )
    };

    loadTableLarge = () => {
        const imageName = 'large_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_large" />
        </div>
        )
    };

    render() {

        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Table</button>
        <Modal open={this.state.openTable} onClose={this.onCloseModal} center>
        <h2>Choose your size please</h2>
        <button className="btn btn-2 btn-2a"> Size: S </button>
            {this.loadTableSmall()}
        <button className="btn btn-2 btn-2a"> Size: M </button>
            {this.loadTableMiddle()}
        <button className="btn btn-2 btn-2a"> Size: L </button>
            {this.loadTableLarge()}
        </Modal>

        </>
        )
    }
}

export default Table;
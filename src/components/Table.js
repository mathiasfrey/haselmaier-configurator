import React from 'react';
import tisch_video from '../assets/tisch_video.mp4';
import Modal from "react-responsive-modal";
import table from '../assets/table_white.png';

const tableImages = {
    small_table: <img src={table} height="200" width="300" alt="ref"/>,
    middle_table: <img src={table} height="200" width="300" alt="ref"/>,
    large_table: <img src={table} height="200" width="300" alt="ref"/>
};

class Table extends React.PureComponent {

    state = {
        open: false,
    };

    onOpenModal = () =>  {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleTable = (size) => {
        this.setState({open: false});
        if (size === 'S') {
            this.props.smallTable();
        } else if (size === 'M') {
            this.props.middleTable();
        } else {
            this.props.largeTable();
        }
    };


    loadTable = (size) => {
        switch (size) {
            case 'S':
                return tableImages.small_table;
            case 'M':
                return tableImages.middle_table;
            case 'L':
                return tableImages.middle_table;
            default:
                return tableImages.small_table;
        }
    };

    render() {

        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>1. Tisch</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Wähle deine Tischgröße</h2>
        <video autoPlay={false} height="300" width="500" controls playsinline={false}>
        <source src={tisch_video} type="video/mp4"/>
        </video>
            <div>
            {this.loadTable('S')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('S')}> KLEIN (bis zu 3 Monitore) </button>
            </div>
            <div>
            {this.loadTable('M')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('M')}> MITTEL (bis zu 4 Monitore) </button>
            </div>
            <div>
            {this.loadTable('L')}
            <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('L')}> GROß (bis zu Monitore) </button>
            </div>
        </Modal>
        </>
        )
    }
}

export default Table;

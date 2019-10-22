import React, {Component} from 'react';
import tisch_video from '../assets/tisch_video.mp4';
import Modal from "react-responsive-modal";

class Table extends Component {

    state = {
        open: false,
        disabled: false,
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

    render() {
        return (
        <>
        <button className="navBtn" onClick={this.onOpenModal}>1. Tisch</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Wähle deine Tischgröße</h2>
        <video autoPlay={false} height="300" width="500" controls playsinline={false}>
        <source src={tisch_video} type="video/mp4"/>
        </video>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('S')}> KLEIN (bis zu 3 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('M')}> MITTEL (bis zu 4 Monitore) </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('L')}> GROß (bis zu Monitore) </button>
        </Modal>

        </>
        )
    }
}

export default Table;
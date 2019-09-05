import React from 'react';
import Modal from 'react-responsive-modal';
import {sizeNumber} from "./Settings";


class Kabel extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingKabelSizeOne = () => {
        this.setState({ open: false });
        this.props.kabelSize(sizeNumber['sizeOne'])
    };

    handlingKabelSizeTwo = () => {
        this.setState({ open: false });
        this.props.kabelSize(sizeNumber['sizeTwo'])
    };

    handlingKabelSizeThree = () => {
        this.setState({ open: false });
        this.props.kabelSize(sizeNumber['sizeThree'])
    };

    handlingKabelSizeFour = () => {
        this.setState({ open: false });
        this.props.kabelSize(sizeNumber['sizeFour'])
    };



    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Kabel</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Kabelführung</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelSizeOne}> Size: 1 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelSizeTwo}> Size: 2 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelSizeThree}> Size: 3 </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelSizeFour}> Size: 4 </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Kabel;

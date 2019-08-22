import React from 'react';
import Modal from 'react-responsive-modal';


class Server extends React.Component {

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
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Server</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Choose your number please</h2>
        <div>
        <button className="btn btn-2 btn-2a"> Size: 1 </button>
        <button className="btn btn-2 btn-2a"> Size: 2 </button>
        <button className="btn btn-2 btn-2a"> Size: 3 </button>
        <button className="btn btn-2 btn-2a"> Size: 4 </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Server;

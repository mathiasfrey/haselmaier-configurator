import React from 'react';
import Modal from 'react-responsive-modal';
import hv_video from '../assets/hv_video.mp4';


class Height extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleHeight = (height) => {
        this.setState({ open: false});
        this.props.callback(height)
    };


    render() {
        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>2. Höhenverstellbar</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Höhenverstellbar</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={hv_video} type="video/mp4"/>
        </video>
            <div>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('ECO')}> ECO </button>
            </div>
            <div>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleHeight('VARIO')}> VARIO </button>
            </div>
        </Modal>
        </>
        )
    }
}

export default Height;

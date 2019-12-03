import React from 'react';
import video from '../assets/video.mp4';
import Modal from 'react-responsive-modal';


class Video extends React.Component {

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
            <button onClick={this.onOpenModal}>Show Video</button>
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <h2> {this.props.title} </h2>
            <video autoPlay="true" height="500" width="500" controls>
            <source src={this.props.src} type="video/mp4"/>
            </video>
            </Modal>
         </>
         )
    }
}

export default Video;



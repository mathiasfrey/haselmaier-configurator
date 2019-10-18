import React from 'react';
import intro from '../assets/intro_video.mp4'
import Modal from 'react-responsive-modal'


class Intro extends React.Component {

    state = {
        open: true,
    };


    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <h2> Unser TTV </h2>
            <video autoPlay={false} height="450" width="600" controls>
            <source src={intro} type="video/mp4"/>
            </video>
            </Modal>
            </div>
        )
    }
}

export default Intro;
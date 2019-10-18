import React from 'react';
import Modal from 'react-responsive-modal';
import kabel_video from '../assets/kabel_video.mp4'

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

    handlingKabelRueckenMit = () => {
        this.setState({open: false });
        this.props.chosenKabelRueckenMit()
    };

    handlingKabelRueckenOhne = () => {
        this.setState({open: false});
        this.props.chosenKabelRueckenOhne()
    };


    render() {
        return (
            <>
                <button id="kabel" className="btn btn-1 btn-1e" onClick={this.onOpenModal}>5. Kabel</button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <video autoPlay={false} height="300" width="500" controls playsinline="false">
                <source src={kabel_video} type="video/mp4"/>
                </video>
                <h2>Kabelrücken für Relingsystem</h2>
                <div>
                <button id='mit' className="btn btn-2 btn-2a" onClick={this.handlingKabelRueckenMit}> Mit Kabelrücken </button>
                <button id="ohne" className="btn btn-2 btn-2a" onClick={this.handlingKabelRueckenOhne}> Ohne Kabelrücken </button>
                </div>
                </Modal>
            </>
        )
    }

}

export default Kabel;
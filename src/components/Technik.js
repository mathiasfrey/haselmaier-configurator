import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';

class Technik extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingTechnikLeft = () => {
        this.setState({ open: true });
        this.props.chosenTechnikLinks();
        document.getElementById('ohne').disabled = false;
        document.getElementById('laden').disabled = false;
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingTechnikRight = () => {
        this.setState({ open: true });
        this.props.chosenTechnikRechts();
        document.getElementById('ohne').disabled = false;
        document.getElementById('laden').disabled = false;
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingTechnikBoth = () => {
        this.setState({ open: true });
        this.props.chosenTechnikBeide();
        document.getElementById('laden').style.color = '#D8D8D8';
        document.getElementById('laden').disabled = true;
        document.getElementById('ohne').style.color = '#D8D8D8';
        document.getElementById('ohne').disabled = true;

    };
    handlingWithoutTechnik = () => {
        this.setState({ open: false });
        this.props.chosenTechnikOhne();
        document.getElementById('ohne').disabled = false;
        document.getElementById('laden').disabled = false;
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingWithContainer = () => {
        this.setState({ open: false });
        this.props.chosenTechnikContainerMit()
    };
    handlingWithoutContainer = () => {
        this.setState({open: false});
        this.props.chosenTechnikContainerOhne()
    };

    /*disableBtn = () => {
        document.getElementById('laden').disabled = true;
        document.getElementById('laden').style.color = 'gray';
        document.getElementById('ohne').disabled = true;
        document.getElementById('ohne').style.color = 'gray';
    };*/


    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Technik</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay="true" height="300" width="500" controls playsInline="false">
        <source src={technik_video} type="video/mp4"/>
        </video>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikLeft}> Linksseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikRight}> Rechtsseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingTechnikBoth}> Beidseitig </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingWithoutTechnik}> Ohne </button>
        </div>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
        <button id='laden' className="btn btn-2 btn-2a" onClick={this.handlingWithContainer}> Mit Ladencontainer </button>
        <button id='ohne' className="btn btn-2 btn-2a" onClick={this.handlingWithoutContainer}> Ohne Ladencontainer </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

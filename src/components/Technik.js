import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';

class Technik extends React.Component {
    state = {
        open: false,
        disabled: true,
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
        this.setState({disabled: false});
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingTechnikRight = () => {
        this.setState({ open: true });
        this.props.chosenTechnikRechts();
        this.setState({disabled: false});
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingTechnikBoth = () => {
        this.setState({ open: true });
        this.props.chosenTechnikBeide();
        this.setState({disabled: true});
        document.getElementById('laden').style.color = '#D8D8D8';
        document.getElementById('ohne').style.color = '#D8D8D8';

    };
    handlingWithoutTechnik = () => {
        this.setState({ open: true });
        this.props.chosenTechnikOhne();
        document.getElementById('laden').style.color = '#F5F5F5';
        document.getElementById('ohne').style.color = '#F5F5F5';
    };
    handlingWithContainer = () => {
        this.setState({ open: false });
        this.props.chosenTechnikContainerMit()
    };
    handlingWithoutContainer = () => {
        this.setState({ open: false });
        this.props.chosenTechnikContainerOhne()
    };



    render() {
        return (
        <>
        <button className="navBtn" onClick={this.onOpenModal}>6. Technik</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
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
        <button id='laden' className="btn btn-2 btn-2a" onClick={this.handlingWithContainer} disabled={this.state.disabled}> Mit Ladencontainer </button>
        <button id='ohne' className="btn btn-2 btn-2a" onClick={this.handlingWithoutContainer} disabled={this.state.disabled}> Ohne Ladencontainer </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

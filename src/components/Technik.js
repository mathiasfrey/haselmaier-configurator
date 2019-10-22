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

    handleTechnik = (technik) => {
        if (technik === 'Links') {
            this.props.chosenTechnikLinks();
            this.setState({disabled: false})
        } else if (technik === 'Rechts') {
            this.props.chosenTechnikRechts();
            this.setState({disabled: false})
        } else if (technik === 'Beide') {
            this.props.chosenTechnikBeide();
            this.setState({disabled: true})
        } else {
            this.props.chosenTechnikOhne();
        }
    };

    handleContainer = (container) => {
        if (container === 'Mit') {
            this.props.chosenTechnikContainerMit();
        } else if (container === 'Ohne') {
            this.props.chosenTechnikContainerOhne();
        }
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
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnik('Links')}> Linksseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnik('Rechts')}> Rechtsseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnik('Beide')}> Beidseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnik('Ohne')}> Ohne </button>
        </div>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
        <button id='laden' className="btn btn-2 btn-2a" onClick={() => this.handleContainer('Mit')} disabled={this.state.disabled}> Mit Ladencontainer </button>
        <button id='ohne' className="btn btn-2 btn-2a" onClick={() => this.handleContainer('Ohne')} disabled={this.state.disabled}> Ohne Ladencontainer </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Technik;

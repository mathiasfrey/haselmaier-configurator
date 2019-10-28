import React from 'react';
import Modal from 'react-responsive-modal';
import technik_video from '../assets/technik_video.mp4';

class Technik extends React.Component {
    state = {
        open: false,
        disabled: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleTechnikSide = (sides) => {
        this.props.callbackSide(sides);
    };


    handleContainer = (container) => {
        this.props.callbackContainer(container);
    };



    render() {
        return (
        <>

        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>6. Technik</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Technik Integration</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={technik_video} type="video/mp4"/>
        </video>
        <h2> Treffen Sie Ihre Auswahl </h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('Links')}> Linksseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('Rechts')}> Rechtsseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('Beide')}> Beidseitig </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleTechnikSide('Ohne')}> Ohne </button>
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

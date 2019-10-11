import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {blendDecision} from "./Settings";
import {kabelRuecken} from "./Settings";


class Blende extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handlingBlendeOne = () => {
        this.setState({ open: true });
        this.props.chosenBlende(blendDecision[0])
    };

    handlingBlendeTwo = () => {
        this.setState({ open: true });
        this.props.chosenBlende(blendDecision[1])
    };

    handlingKabelRueckenOne = () => {
        this.setState({open: false });
        this.props.chosenKabelRuecken(kabelRuecken[0])
    };

    handlingKabelRueckenTwo = () => {
        this.setState({open: false});
        this.props.chosenKabelRuecken(kabelRuecken[1])
    };

    render() {
        return (
        <>
        <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Blende</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Gewünschte Blendeneinstellung?</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeOne}> Keinen </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingBlendeTwo}> Voller Blendschutz </button>
        <h2>Kabelrücken</h2>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelRueckenOne}> Mit Kabelrücken </button>
        <button className="btn btn-2 btn-2a" onClick={this.handlingKabelRueckenTwo}> Ohne Kabelrücken </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;
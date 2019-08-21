import React from 'react';
import Modal from 'react-responsive-modal';


class Settings extends React.Component {

    state = {
        openTable: false,
        openMonitor: false,
        openHeight: false,
        openLight: false,
        openElectricity: false,
        openMechanic: false,
    };

    onOpenModal = () => {
    this.setState({ openTable: true });
  };

    onCloseModal = () => {
    this.setState({ openTable: false });
    };

    onOpenModalSecond = () => {
    this.setState({ openMonitor: true });
  };

    onCloseModalSecond = () => {
    this.setState({ openMonitor: false });
    };

    onOpenModalHeight = () => {
    this.setState({ openHeight: true });
  };

    onCloseModalHeight = () => {
    this.setState({ openHeight: false });
    };

    onOpenModalLight = () => {
    this.setState({ openLight: true });
  };

    onCloseModalLight = () => {
    this.setState({ openLight: false });
    };

     onOpenModalElectricity = () => {
    this.setState({ openElectricity: true });
  };

    onCloseModalElectricity = () => {
    this.setState({ openElectricity: false });
    };

    onOpenModalMechanic = () => {
    this.setState({ openMechanic: true });
  };

    onCloseModalMechanic= () => {
    this.setState({ openMechanic: false });
    };



    render() {
      return (
            <>
                <div className="padding-left">
                <h2>Configure your own product </h2>
                </div>
                <div className="settings">
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModal}>Tisch</button>
                    <Modal open={this.state.openTable} onClose={this.onCloseModal} center>
                    <h2>Choose your size please</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> Size: S </button>
                        <button className="btn btn-2 btn-2a"> Size: M </button>
                        <button className="btn btn-2 btn-2a"> Size: L </button>
                        </div>
                    </Modal>
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModalSecond}>Monitoraufhängung</button>
                    <Modal open={this.state.openMonitor} onClose={this.onCloseModalSecond} center>
                    <h2>Choose your number please</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> Size: 1 </button>
                        <button className="btn btn-2 btn-2a"> Size: 2 </button>
                        <button className="btn btn-2 btn-2a"> Size: 3 </button>
                        <button className="btn btn-2 btn-2a"> Size: 4 </button>
                        <button className="btn btn-2 btn-2a"> Size: 5 </button>
                        <button className="btn btn-2 btn-2a"> Size: 6 </button>
                        <button className="btn btn-2 btn-2a"> Size: 7 </button>
                        <button className="btn btn-2 btn-2a"> Size: 8 </button>
                        </div>
                    </Modal>
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModalHeight}>Höhenverstellbar</button>
                    <Modal open={this.state.openHeight} onClose={this.onCloseModalHeight} center>
                    <h2>Would you like to adjust the height?</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> Yes </button>
                        <button className="btn btn-2 btn-2a"> No </button>
                        </div>
                    </Modal>
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModalLight}>Lichtsystem </button>
                    <Modal open={this.state.openLight} onClose={this.onCloseModalLight} center>
                    <h2>Do you need a system for controlling your light?</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> Yes </button>
                        <button className="btn btn-2 btn-2a"> No </button>
                        </div>
                    </Modal>
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModalElectricity}>Stromleisten </button>
                    <Modal open={this.state.openElectricity} onClose={this.onCloseModalElectricity} center>
                    <h2>Do you need powerboards?</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> Yes </button>
                        <button className="btn btn-2 btn-2a"> No </button>
                        </div>
                    </Modal>
                <button className="btn btn-1 btn-1e" onClick={this.onOpenModalMechanic}>Gewünschter Monteur </button>
                    <Modal open={this.state.openMechanic} onClose={this.onCloseModalMechanic} center>
                    <h2>Who is your preferred assembler?</h2>
                        <div>
                        <button className="btn btn-2 btn-2a"> 👷🏼 ‍Harry </button>
                        <button className="btn btn-2 btn-2a"> 👷🏼 Spax </button>
                        <button className="btn btn-2 btn-2a"> 👷🏼 Lukas </button>
                        <button className="btn btn-2 btn-2a"> 👷🏼 Kieflandi </button>
                        </div>
                    </Modal>
                </div>
            </>
       )
}

}

export default Settings;
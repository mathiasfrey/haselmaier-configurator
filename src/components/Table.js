import React from 'react';
import tisch_video from '../assets/tisch_video.mp4';
import Modal from "react-responsive-modal";
import {ModalImagesPath} from "./PreviewImageHandler";
import { Consumer } from "./Context";


class Table extends React.PureComponent {

    state = {
        open: false,
    };

    onOpenModal = () =>  {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    /*    handleTable = (size) => {
        this.setState({open: false});
        context.actions.tableState(size);
    };*/


    loadPreviewImages = (images) => {
        switch (images) {
            case 'S':
                return ModalImagesPath.small_table;
            case 'M':
                return ModalImagesPath.middle_table;
            case 'L':
                return ModalImagesPath.large_table;
            default:
                return ModalImagesPath.small_table
        }

    };
    handleTable;

    render() {
        return (
        <Consumer>
            { context => (

                this.handleTable = (size) => {
                    this.setState({open: false});
                    context.actions.tableState(size);
                    // eslint-disable-next-line
                },
                <>
                    <button ref={this.props.tableRef}
                        className={ 'navBtn ' + (context.chosenTable && 'done')}
                        onClick={this.onOpenModal} data-cy="table">1. Tisch
                    </button>
                    <div className={'divider ' + (context.chosenTable && 'done')}/>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                            <h2>Tisch</h2>
                            <video autoPlay={false} height="400" width="600" controls playsInline={false}>
                                <source src={tisch_video} type="video/mp4"/>
                            </video>
                                <div className="row">
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTable('S')} data-cy="S">{this.loadPreviewImages('S')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('S')}>KLEIN (bis zu 3 Monitore)</button>
                                    </div>
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTable('M')}>{this.loadPreviewImages('M')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('M')} data-cy="M">MITTEL (bis zu 4 Monitore)</button>
                                    </div>
                                    <div className="column">
                                        <button className="border-white" onClick={() => this.handleTable('L')}>{this.loadPreviewImages('L')}</button>
                                        <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('L')} data-cy="L"> GROß (bis zu 5 Monitore) </button>
                                    </div>
                                </div>
                    </Modal>
                    </>
                )}
        </Consumer>
        )
    }

}



export default Table;

import React from 'react';
import Video from "./Video";
import video from '../assets/video.mp4';



class Summary extends React.Component {

    render() {

        return (
            <>
            <div className="current_state top">
                <h4> Mein Tisch (current state) </h4>
                <h6> Tischgröße </h6>
                <h5>  - {this.props.chosenTable} </h5>
                <h6> Monitor Einstellung</h6>
                <h5>  - {this.props.chosenMonitorRow} </h5>
                <h5>  - {this.props.chosenMonitorSize} </h5>
                <h6> Höhenverstellbar </h6>
                <h5>  - {this.props.chosenServerSize} </h5>
                <h6> Gewünschte Blendeneinstellung </h6>
                <h5>  - {this.props.chosenBlende} </h5>
                <h6> Gewünschte Technik </h6>
                <h5>  - {this.props.chosenTechnik} </h5>
            </div>
            </>
        )
    }


}

export default Summary;
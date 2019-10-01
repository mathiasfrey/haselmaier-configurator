import React from 'react';
import Video from "./Video";
import video from '../assets/video.mp4';



class Summary extends React.Component {

    render() {

        return (
            <>
             <div className="padding-left lineSpacing">
                 <h4> Mein Tisch </h4>
                 ✅ Höhenverstellbar <br />
                 <Video
                 title="Höhenverstellbar" src={video}
                 /> <br/>
                 ✅ Industriedesign (Video) <br />
                 <Video
                 title="Industriedesign" src={video}
                 /> <br />
                 ✅ Robust (Video) <br />
                 <Video
                 title="Robust" src={video}
                 />
              </div>
            <div className="padding-left summary">
                <h4> Mein Tisch (current state) </h4>
                <h6> Tischgröße </h6>
                <h5>  - {this.props.chosenTable} </h5>
                <h6> Monitor Einstellung</h6>
                <h5>  - {this.props.chosenMonitorRow} </h5>
                <h5>  - {this.props.chosenMonitorSize} </h5>
                <h6> Kabelführung </h6>
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
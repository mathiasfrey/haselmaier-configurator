import React from 'react';


class Summary extends React.Component {


    render() {

        return (
            <>
             <div  className="padding-left">
                 <h4> Meine Leitstelle </h4>
                 ✔ Höhenverstellbar (Video) <br />
                 ✔ Industriedesign (Video) <br />
                 ✔ Robust (Video)
              </div>
            <div className="padding-left summary">
                <h4> Meine Leitstelle (current state) </h4>
                <h6> Tischgröße </h6>
                <h5>  - {this.props.chosenTable} </h5>
                <h6> Monitor </h6>
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
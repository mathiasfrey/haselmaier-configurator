import React from 'react';
import intro from '../../assets/intro_video.mp4'


class Intro extends React.Component {
    render() {
        return (
            <div className="background_black">
            {/*<h2 className="white"> Starten Sie mit Ihrer Konfiguration </h2>*/}
            <video autoPlay={false} height="450" width="600" controls>
            <source src={intro} type="video/mp4"/>
            </video>
            </div>
        )
    }
}

export default Intro;
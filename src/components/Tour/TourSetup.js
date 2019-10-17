import React from 'react';
import ReactSwipe from 'react-swipe';
import Intro from '../Intro';

let reactSwipeEl;


class TourSetup extends React.Component {


  render() {
   return (
      <div>
      <ReactSwipe
        className="tourView"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className="top">
        <Intro />
        </div>
        <div>
            <h2> Wähle oberhalb deine Konfiguration </h2>
            {this.props.chosenTablePic}
            {this.props.chosenMonitorPic}
            {this.props.chosenHeightPic}
        </div>
        <div>
            <h2> Ihr Productcode </h2>
            {this.props.productCodeOfTable + this.props.productCodeOfMonitor + this.props.productCodeOfMonitorRow + this.props.productCodeOfHeight +
            this.props.productCodeOfBlende + this.props.productCodeOfKabel + this.props.productCodeOfTechnik + this.props.productCodeOfContainer}
        </div>
      </ReactSwipe>
      <button className="tourNav next btn btn-4 btn-4a" onClick={() => reactSwipeEl.next()}>Next</button>
      <button className="tourNav prev btn btn-4 btn-4a" onClick={() => reactSwipeEl.prev()}>Back</button>
    </div>
   )

  }
}

export default TourSetup;
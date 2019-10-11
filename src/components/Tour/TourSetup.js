import React from 'react';
import ReactSwipe from 'react-swipe';
import Intro from '../Tour/Intro';

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
        <div>
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
            {this.props.productCode}
        </div>
      </ReactSwipe>
      <button className="tourNav next btn btn-4 btn-4a" onClick={() => reactSwipeEl.next()}>Next</button>
      <button className="tourNav prev btn btn-4 btn-4a" onClick={() => reactSwipeEl.prev()}>Back</button>
    </div>
   )

  }
}

export default TourSetup;
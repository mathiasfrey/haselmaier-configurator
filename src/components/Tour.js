import React from 'react';
import ReactSwipe from 'react-swipe';
import intro from '../assets/intro_video.mp4'

let reactSwipeEl;

class Tour extends React.Component {


  render() {
   return (
      <div>
      <ReactSwipe
        className="tourView"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
            <video autoPlay="true" height="100" width="100" controls>
            <source src={intro} type="video/mp4"/>
            </video>
        </div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button className="" onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
   )

  }
}

export default Tour;
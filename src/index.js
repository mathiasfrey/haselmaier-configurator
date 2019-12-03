import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Height from "./components/Height";
import Monitor from "./components/Monitor";
import Blende from "./components/Blende";
import Technik from "./components/Technik";

export const URIS = {
    HEIGHT: '/height',
    MONITOR: '/monitor',
    BLENDE: '/blende',
    TECHNIK: '/technik',
};


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path={URIS.HEIGHT} component={Height}/>
      <Route path={URIS.MONITOR} component={Monitor}/>
      <Route path={URIS.BLENDE} component={Blende}/>
      <Route path={URIS.TECHNIK} component={Technik}/>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

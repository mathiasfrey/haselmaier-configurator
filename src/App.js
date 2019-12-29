import React, {Component} from 'react';
import Header from './components/Header';
import './App.scss';
import Settings from './components/Settings';
import Intro from "./components/Intro";
import ErrorBoundary from "./components/ErrorBoundary";


class App extends Component{

  render() {
  return (
      <div className="configurator">
          <Header
          title="Der Haselmaier Leitstellen Konfigurator"
          />
          <Intro />
          <ErrorBoundary>
             <Settings />
          </ErrorBoundary>
      </div>
  );
  }
}
export default App;

import React, {Component} from 'react';
import Header from './components/Header';
import './App.scss';
import Settings from './components/Settings';
import Intro from "./components/Intro";



class App extends Component{

  render() {
  return (
      <div className="configurator">
          <Header
          title="Der Haselmaier Leitstellen Konfigurator"
          />
          <Intro />
          <Settings />
      </div>
  );
  }
}
export default App;

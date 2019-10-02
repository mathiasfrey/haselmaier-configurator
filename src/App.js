import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';
import Settings from './components/Settings';



class App extends Component{



  render() {
  return (
      <div className="configurator">
          <Header
          title="Leitstellen Konfigurator TTV"
          />
          <Settings />
      </div>
  );
  }
}
export default App;

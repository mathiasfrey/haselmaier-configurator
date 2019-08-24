import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';
import Settings from './components/Settings';
import Product from "./components/Product";


class App extends Component{


  render() {
  return (
      <div className="configurator">
          <Header
          title="Haselmaier Configurator"
          />
          <Settings />
          <Product
          title="Product View"
          />
      </div>
  );
  }
}


export default App;

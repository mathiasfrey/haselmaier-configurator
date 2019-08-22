import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';
import Settings from './components/Settings';
import Product from "./components/Product";
import tableSmall from './assets/table_small.jpg'


class App extends Component{

    loadTableSmall = () => {
        console.log('Hi');
        return (
            <>
            <div className="tableSmall">
                <img src={tableSmall} alt={tableSmall} />
            </div>
            </>
        )
    };

  render() {
  return (
      <div className="configurator">
          <Header
          title="Haselmaier Configurator"
          />
          <Settings />
          <Product
          title="Product View"
          smallTable={this.loadTableSmall}
          />

      </div>
  );
  }
}

export default App;

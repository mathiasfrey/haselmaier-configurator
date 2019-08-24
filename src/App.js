import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';
import Settings from './components/Settings';
import Product from "./components/Product";
import table_small from './assets/table_small.jpg'
import table_middle from './assets/table_middle.jpeg'
import table_large from './assets/table_large.jpg'

const imagesPath = {
  small_table: table_small,
  middle_table: table_middle,
  large_table: table_large,
};


class App extends Component{

    loadTableSmall = () => {
        const imageName = 'small_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_small" />
        </div>
        )
    };

    loadTableMiddle = () => {
        const imageName = 'middle_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_middle" />
        </div>
        )
    };

    loadTableLarge = () => {
        const imageName = 'large_table';
        return (
        <div>
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_large" />
        </div>
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

          />

      </div>
  );
  }
}


export default App;

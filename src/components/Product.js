import React from 'react';
import pic from '../assets/test.png';
import table_small from '../assets/table_small.jpg'
import table_middle from '../assets/table_middle.jpeg'
import table_large from '../assets/table_large.jpg'


const imagesPath = {
  small_table: table_small,
  middle_table: table_middle,
  large_table: table_large,
};

const imageName = "small_table";

class Product extends React.Component {

    loadTable = () => {
        return (
            <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_small" />
            )
    };

    render() {
       return(
        <>
        <div className="productView">
            <button onClick={this.loadTable}>Show pic</button>
            <img src={pic} alt="small" width="400" height="400"/>

        </div>
        </>
    )

    }



}

export default Product;

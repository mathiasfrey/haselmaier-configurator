import React from 'react';
import table_small from '../assets/table_small.jpg'
import table_middle from '../assets/table_middle.jpeg'

const imagesPath = {
  small_table: table_small,
  middle_table: table_middle,
};

class Images extends React.Component {
    state = {
        open: true
    };

    toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  };

    getImageName = () => this.state.open ? 'small_table' : 'middle_table';

    render() {
        const imageName = this.getImageName();
        return (
            <div>
                <img style={{maxWidth: '500px'}} src={imagesPath[imageName]} alt="image_alt" onClick={this.toggleImage} />
            </div>
        )
    }


}

export default Images;
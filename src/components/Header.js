import React from 'react';
import logo from '../assets/hasel-logo.png';

const Header = (props) => {
    return (
        <header>
            <img src={logo}/>
            <h1><strong>{props.title}</strong></h1>
        </header>
    )
};

export default Header;
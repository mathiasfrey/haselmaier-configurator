import React from 'react';
import logo from '../assets/hasel-logo.png';

const Header = (props) => {
    return (
        <header>
            <a href="/leitstellen">
            <img src={logo} alt="logo"/>
            </a>
            
            <h1><strong>{props.title}</strong></h1>
        </header>
    )
};

export default Header;
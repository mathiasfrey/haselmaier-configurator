import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1><strong>{props.title}</strong></h1>
        </header>
    )
};

export default Header;
import PropTypes from 'prop-types';
import React from 'react';

export default function Header(props) {
    return (
        <header className="App-header">
            <h1 className="App-title">{props.pageTitle}</h1>
        </header>
    );
}

Header.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
};
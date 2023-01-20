import React from 'react';
import '../App.css';
import Nav from './Nav';

const Header = () => {

 return (
        <header className='headerBack'>
            <span class="logo flex" href="/"></span>
            <Nav />
        </header>
    );
};

export default Header;
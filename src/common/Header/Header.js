import React from 'react';
import "./Header.css"
import Head from './Head';
import Search from './Search';
import NavBar from './NavBar';

const Header = ({ cartItem }) => {
  return (
    <>
        <Head />
        <Search cartItem={cartItem} />
        <NavBar />
    </>

  )
}

export default Header;
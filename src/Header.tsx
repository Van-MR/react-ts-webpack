import React from 'react';
const logo = require('./asset/logo.png')

interface PropFav {
   favorites: Array<any>;
}

const Header = (props:PropFav) => {
  return (
    <header>
      <p className="header-left">
         <span>ricky and morty</span>
         <img  src={logo} alt="pic" />
      </p>
      <p >pick your favorite episode!({props.favorites.length})</p>
    </header>
  )
}

export default Header;

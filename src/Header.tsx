import React from 'react';
import { Link } from '@reach/router'
const logo = require('./asset/logo.png')

interface IProps {
  favorites: Array<any>;
  setShow: (value: boolean) => void
}

const Header = (props: IProps) => {
  return (
    <header>
      <p className="header-left">
         <span>ricky and morty</span>
         <img  src={logo} alt="pic" />
      </p>
      <p style={{cursor:'pointer'}}>
         <span style={{marginRight:'4em'}} onClick={() => props.setShow(false) }>Home</span>
         <span onClick={() => props.setShow(true) }>
           pick your favorite episode!(<strong style={{color:'red'}}>{props.favorites.length}</strong>)
         </span>
      </p>
    </header>
  )
}

export default Header;

import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/icons/search.svg';

export default function Header(){
    return(
        <header className='header'>
          <img src={logo} alt='Logo AluraSpace'/>
          <div className='header-input'>
            <input type='text' placeholder='O que você procura?'/>
            <img src={searchIcon} className='search-img' alt='Lupa de busca'/>
          </div>
        </header>
    );
}
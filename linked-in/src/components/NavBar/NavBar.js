import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="nav__container">
      <nav className="navbar">
        <div className="navbar__left">
          <img className="navbar__logo" src="https://dummyimage.com/50x50/2f77eb/e8e8e8&text=LI" alt="logo" />
          <SearchBar />
        </div>
        <div className="navbar__right">
          <div className="navbar__link">Home</div>
          <div className="navbar__link">My Network</div>
          <div className="navbar__link">Jobs</div>
          <div className="navbar__link">Messaging</div>
          <div className="navbar__link">Notifications</div>
          <div className="navbar__link">Me</div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
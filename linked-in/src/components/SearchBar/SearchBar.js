import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="searchBar">
      <input className="searchBar__input" type="text" placeholder="Search" />
    </form>
  )
}

export default SearchBar;
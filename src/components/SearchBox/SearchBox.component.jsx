import React from 'react'

import './SearchBox.style.css'

import SearchIcon from '../../icon/Search.svg'

function SearchBox({ placeholder, handleChange }) {
    return (
      <div className='search--container'>
        <i><img src={SearchIcon} alt="search icon" /></i>
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
      </div>
      
    )
}

export default SearchBox;
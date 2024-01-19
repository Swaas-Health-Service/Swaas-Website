import React from 'react'
import './Doctor.css'

const SearchBar = () => {
  return (
      <div className="searchbar">
        <input className="search-input-feild" type="text" placeholder="Search for patient" />
      </div>
    )
}

export default SearchBar
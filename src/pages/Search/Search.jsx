import React from 'react'
import './Search.css'
import { useGlobalContext } from '../../context/Context';
import {FaSearch} from "react-icons/fa"

const Search = () => {
  const {showSearch} = useGlobalContext();
  console.log(showSearch);
  
  return (
    <div className='page-margin'>
      {/* now the search-section will have display:block if the showSearch is true */}
      <div className={`search-section  ${showSearch ? "show" : ""}` }>
        <h1 className='search-title'>Search</h1>
        <div className="search-input-section">
          <FaSearch className='search-icon' />
          <input type="text" className='search-input' placeholder='Search' /></div>
        <div className="result-section">
          <hr />
          <div className="recent-and-clear-text">
          <h3>Recent</h3>
          <p>Clear all</p>
          </div>
          <div className="results"></div>
        </div>
      </div>
    </div>
  )
}

export default Search
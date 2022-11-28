import React from 'react'
import './Search.css'
import { useGlobalContext } from '../../context/Context';


const Search = () => {
  const {showSearch} = useGlobalContext();
  console.log(showSearch);
  
  return (
    <div className='page-margin'>
      {/* now the search-section will have display:block if the showSearch is true */}
      <div className={`search-section  ${showSearch ? "show" : ""}` }>
        <h1>Search</h1>
        <div className="search-input-section"><input type="text" /></div>
        <div className="result-section">
          <h2>Recent</h2>
          <div className="results"></div>
        </div>
      </div>
    </div>
  )
}

export default Search
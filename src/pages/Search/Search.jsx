import React from 'react'
import './Search.css'
const Search = () => {
  return (
    <div className='page-margin'>
      <div className="search-section">
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
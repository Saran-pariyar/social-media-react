import React from 'react'
// import Search from '../../pages/Search/Search'
import "./Hero.css"
import Story from './Story'

const Hero = () => {
  return (
    <div className="hero-section"><span onClick={()=>{
      alert("Did you mean saran pariyar?")
    }}> Hero</span>
        <Story />
        {/* <Search /> */}
    </div>
  )
}

export default Hero
import React from 'react'
import Feed from '../Feed/Feed'
import RightSide from '../RightSide/RightSide'
// import Search from '../../pages/Search/Search'
import "./Hero.css"
import Story from './Story'

const Hero = () => {
  return (
    <div className="hero-section">
      <span onClick={()=>{
      alert("Did you mean saran pariyar?")
    }}> Hero</span>
    <div className="left">
        <Story />
        <Feed />
        {/* <Search /> */}
        </div>
        <div className="right">
        <RightSide />
        </div>
    </div>
  )
}

export default Hero
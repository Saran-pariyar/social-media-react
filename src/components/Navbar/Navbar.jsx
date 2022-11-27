import React,{useEffect} from "react";
import "./Navbar.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineProfile
} from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { NavLink,useLocation } from "react-router-dom";
import { useGlobalContext } from '../../context/Context';


const Navbar = () => {
  const {showSearch,setShowSearch} = useGlobalContext();
  function show_search(){
    showSearch ? setShowSearch(false) : setShowSearch(true);
  }
  const location = useLocation();
  useEffect(() => {
if ( showSearch){
  setShowSearch(false)
}
    
  }, [location]);
  return (
    <nav className="nav">
      <div className="logo">
        <h1 >Instagram </h1>
      </div>
      <ul className="nav-list">
        <li className="">
        <NavLink to="/" className="NavLinks home-nav">
          <AiFillHome className="menu-icons" /><p className="menu-name">Home</p>
          </NavLink>
        </li>
        <li >
        <p to="/search" className="NavLinks search-nav" onClick={show_search}>
          <AiOutlineSearch className="menu-icons" /><span className="menu-name">Search</span>
          </p>
        </li>
        <li >
          <NavLink to="/explore" className="NavLinks explore-nav">
          <AiOutlineCompass className="menu-icons" /><p className="menu-name">Explore</p>
          </NavLink>
        </li>
        <li className="">
        <NavLink to="/message" className="NavLinks message-nav">
          <AiOutlineMessage className="menu-icons" /><p className="menu-name">Messages</p>
          </NavLink>
        </li>
        <li className="">
        <NavLink to="/notification" className="NavLinks notification-nav">
          <AiOutlineHeart className="menu-icons" /><p className="menu-name">Notifications</p>
          </NavLink>
        </li>
        <li className="">
        <NavLink to="/create" className="NavLinks create-nav">
          <BiBookAdd className="menu-icons" /><p className="menu-name">Create</p>
          </NavLink>
        </li>
        <li className="">
        <NavLink to="/profile" className="NavLinks profile-nav">
        <AiOutlineProfile className="menu-icons" />
          <p className="menu-name">
           Profile</p>
           </NavLink>
           </li>
        <li className="">
        <NavLink to="/more" className="NavLinks more-nav">
          <AiOutlineMenu className="menu-icons" /><p className="menu-name">More</p>
          </NavLink>
        </li>
      </ul>
      <span className="for-nav-z-index"></span>
      <span className="line-1 menu-line"></span>
      <span className="line-2 menu-line"></span>
      <span className="for-mobile-nav"></span>
    </nav>
  );
};

export default Navbar;

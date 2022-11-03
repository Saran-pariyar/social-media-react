import React from "react";
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
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h1>Instagram </h1>
      </div>
      <ul className="nav-list">
        <li className="home-nav ">
          <AiFillHome className="menu-icons" /><p className="menu-name">Home</p>
        </li>
        <li className="search-nav ">
          <AiOutlineSearch className="menu-icons" /><p className="menu-name">Search</p>
        </li>
        <li className=" explore-nav">
          <AiOutlineCompass className="menu-icons" /><p className="menu-name">Explore</p>
        </li>
        <li className=" message-nav">
          <AiOutlineMessage className="menu-icons" /><p className="menu-name">Messages</p>
        </li>
        <li className="notification-nav ">
          <AiOutlineHeart className="menu-icons" /><p className="menu-name">Notifications</p>
        </li>
        <li className="create-nav ">
          <BiBookAdd className="menu-icons" /><p className="menu-name">Create</p>
        </li>
        <li className=" profile-nav">
        <AiOutlineProfile className="menu-icons" />
          <p className="menu-name">
           Profile</p></li>
        <li className="more-nav">
          <AiOutlineMenu className="menu-icons" /><p className="menu-name">More</p>
        </li>
      </ul>
      <span className="for-nav-z-index"></span>
      <span className="line-1 menu-line"></span>
      <span className="line-2 menu-line"></span>
    </nav>
  );
};

export default Navbar;

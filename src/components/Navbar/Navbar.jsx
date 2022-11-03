import React from "react";
import "./Navbar.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h1>Instagram </h1>
      </div>
      <ul className="nav-list">
        <li>
          <AiFillHome className="menu-icons" />Home
        </li>
        <li>
          <AiOutlineSearch className="menu-icons" />Search
        </li>
        <li>
          <AiOutlineCompass className="menu-icons" />Explore
        </li>
        <li>
          <AiOutlineMessage className="menu-icons" />Messages
        </li>
        <li>
          <AiOutlineHeart className="menu-icons" />Notifications
        </li>
        <li>
          <BiBookAdd className="menu-icons" />Create
        </li>
        <li>Profile</li>
        <li>
          <AiOutlineMenu className="menu-icons" />More
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

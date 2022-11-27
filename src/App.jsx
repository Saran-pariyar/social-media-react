import './App.css';
// import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import Explore from './pages/Explore/Explore';
import Notification from './pages/Notification/Notification';
import Search from './pages/Search/Search';
// import { useGlobalContext } from './context/Context';

function App() {
  // const {showSearch,setShowSearch} = useGlobalContext();

// console.log(showSearch+"start");

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index element={<Hero />}></Route>
      <Route path='/home' element={<Hero />}></Route>

      <Route path="/explore" element={<Explore  /> } ></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/profile" element={<Profile  /> }></Route>
      <Route path="/notification" element={<Notification /> }></Route>
      <Route path="/search" element={<Search /> }></Route>    
      </Routes>
      </BrowserRouter>
      <Search />
    </div>
  );
}

export default App;

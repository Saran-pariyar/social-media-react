import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import Explore from './pages/Explore/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index element={<Hero />}></Route>
      <Route path='/home' element={<Hero />}></Route>

      <Route path="/explore" element={<Explore  className="margin" /> }></Route>
      <Route path="/message" element={<Message className="margin" />}></Route>
      <Route path="/profile" element={<Profile  className="margin" /> }></Route>
  
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

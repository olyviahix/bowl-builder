import './CSS/Index.css';
import './CSS/LeanFeast.css';
import './CSS/ContactUs.css';
import './CSS/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import LeanFeast from './components/LeanFeast';


function App() {
  return (
    <div className="App">
    <h1>Build A Bowl</h1>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/LeanFeast" element={<LeanFeast/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <ContactUs/> */}
          {/* <Route path="/grid" element={<grid/>}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

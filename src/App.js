import './CSS/Index.css';
import './CSS/LeanFeast.css';
import './CSS/ContactUs.css';
import './CSS/Home.css'
import './CSS/Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import LeanFeast from './components/LeanFeast';
import Weather from './components/Weather';


function App() {

const Layout = () => {
  return (
    <>
      <Navbar/>
      <h1>Build A Bowl</h1>
      
      <Outlet/>
    </>
  )
}

  return (
<>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/LeanFeast" element={<LeanFeast/>}/>
            <Route path="/Weather" element={<Weather/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;

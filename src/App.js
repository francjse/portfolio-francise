import React from "react";
import { Routes, Route } from 'react-router-dom'; 
import Nav from "./nav/Nav.js";
import Info from "./info/Info.js";
import Works from "./works/Works.js";
import Frames from "./frames/Frames.js";
import Contact from "./contact/Contact.js";
import Background from "./background/Background.js";
import Footer from "./footer/Footer.js";

import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/logo" element={<Info />} />
        <Route path="/about" element={<Info />} />
        <Route path="/works" element={<Works />} />
        <Route path="/frames" element={<Frames />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
    </div>
  );
};

export default App;
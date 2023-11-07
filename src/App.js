import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Import your Navbar component here
import Home from './home'; // Import your Home component here
import Card from './card.js'; // Import your Card component here
import Contact from './contact'; // Import your Contact component here
import NoPage from './nopage'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar title="Navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




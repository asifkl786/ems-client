import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Define other routes here */}
          </Routes>
        </BrowserRouter>
       
      </main>
    </div>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Home from './components/Home/Home'
// import Project from './components/Project/Project';
// import './App.css'

// function App() {
//   return (
//     <>
//       < Home/>
//       <Project />
//     </>
//   )
// }

// export default App


// src/App.jsx
import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home'
import Project from './components/Project/Project';
import Gallery from './components/Gallery/Gallery';

import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


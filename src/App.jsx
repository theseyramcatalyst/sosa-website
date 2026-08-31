// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from "./pages/WhoWeAre";
import Projects from "./pages/Projects";
import JoinUs from "./pages/JoinUs";

// Import other pages when you create them
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
           <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/join-us"
          element={<JoinUs />}
        />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
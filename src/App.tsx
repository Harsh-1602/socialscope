import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import AboutUs from './pages/AboutUs';
import Visualization from './pages/Visualization';
import { NavigationProvider } from './context/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/visualization" element={<Visualization />} />
          </Routes>
        </div>
      </Router>
    </NavigationProvider>
  );
}

export default App;
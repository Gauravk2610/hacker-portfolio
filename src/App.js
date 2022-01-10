import logo from './logo.svg';
import './App.css';
import Splash from './pages/Splash';
import { useState } from 'react';
import Home from './pages/Home';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  const [showSplash, setShowSplash] = useState(false)

  // const location = useLocation()

  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <AnimatedRoutes />
        </AnimatePresence>
      </Router>

    </div>
  );
}

export default App;

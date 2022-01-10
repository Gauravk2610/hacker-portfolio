import Splash from './pages/Splash';
import { useState } from 'react';
import Home from './pages/Home';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    const [showSplash, setShowSplash] = useState(true)
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={showSplash ? <Splash setShowSplash={setShowSplash} /> : <NewHome />} />
            <Route exact path='/about' element={<About />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
    );
  };
  
  export default AnimatedRoutes;
  
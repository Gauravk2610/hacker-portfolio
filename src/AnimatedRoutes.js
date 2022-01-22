import Splash from './pages/Splash';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';
import Resume from './pages/Resume';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const AnimatedRoutes = ({showSplash, setShowSplash}) => {
    const location = useLocation();
    // const [showSplash, setShowSplash] = useState(false)
    useEffect(() => showSplash ? <Navigate replace to={'/'} /> : null, 
    [location.pathname])
  
    function ProtectedRoute({ Component }) {
      if (showSplash) {
        return <Navigate replace to="/" />;
      }
      return <Component />;
    }

    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={showSplash ? <Splash setShowSplash={setShowSplash} /> : <NewHome />} />
            <Route exact path='/contact' element={<ProtectedRoute Component={Contact} />} />
            <Route exact path='/about' element={<ProtectedRoute Component={About} />} />
            <Route exact path='/resume' element={<ProtectedRoute Component={Resume} />} />
            <Route exact path='/blog' element={<ProtectedRoute Component={Blog} />} />
            <Route exact path='/travel' element={<ProtectedRoute Component={Travel} />} />
        </Routes>
      </AnimatePresence>
    );
  };
  
  export default AnimatedRoutes;
  
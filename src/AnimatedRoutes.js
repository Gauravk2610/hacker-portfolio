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
import Page403 from './pages/Page403';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import IOSLab from './pages/IOSLab';

const AnimatedRoutes = () => {
    const location = useLocation();
    // // const [showSplash, setShowSplash] = useState(false)
    // useEffect(() => showSplash ? <Navigate replace to={'/'} /> : null, 
    // [location.pathname])
  
    // function ProtectedRoute({ Component }) {
    //   if (showSplash) {
    //     return <Navigate replace to="/" />;
    //   }
    //   return <Component />;
    // }

    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/resources/Lab-setup-for-IOS-testing' element={<IOSLab />} />
            <Route exact path='/' element={<NewHome />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/travel' element={<Travel />} />
            <Route exact path='/403' element={<Splash />} />
            <Route exact path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    );
  };
  
  export default AnimatedRoutes;
  
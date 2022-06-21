import logo from './logo.svg';
import './App.css';
import Splash from './pages/Splash';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  // const [showSplash, setShowSplash] = useState(sessionStorage.getItem('splash') === 'false' ? false : true )

  // // const location = useLocation()
  // useEffect(() => {
  //   const splash = sessionStorage.getItem('splash')
  //   console.log(splash)
  //   if (splash === null) {
  //     sessionStorage.setItem('splash', true)
  //     setShowSplash(true)
  //     return
  //   }
  //   setShowSplash(splash  === 'false' ? false : true )

  // }, [])

  useEffect(() => {
    let progress = document.getElementById('progressbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%"
    }
  }, [])

  return (
    <>
      <div id='progressbar' />
      <div id='scrollPath' />
      <div className="App">
        <Router>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <AnimatedRoutes />
          </AnimatePresence>
        </Router>
      </div>
    </>
  );
}

export default App;

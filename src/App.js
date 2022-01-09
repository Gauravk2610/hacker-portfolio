import logo from './logo.svg';
import './App.css';
import Splash from './pages/Splash';
import { useState } from 'react';
import Home from './pages/Home';
import NewHome from './pages/NewHome';
import Header from './components/Header';

function App() {

  const [showSplash, setShowSplash] = useState(false)

  return (
    <div className="App">
      {
        showSplash ? <Splash setShowSplash={setShowSplash} /> : <><Header /><NewHome /></>
      }
      
    </div>
  );
}

export default App;

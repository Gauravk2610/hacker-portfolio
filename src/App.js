import logo from './logo.svg';
import './App.css';
import Splash from './pages/Splash';
import { useState } from 'react';
import Home from './pages/Home';

function App() {

  const [showSplash, setShowSplash] = useState(false)

  return (
    <div className="App">
      {
        showSplash ? <Splash setShowSplash={setShowSplash} /> : <Home />
      }
      
    </div>
  );
}

export default App;

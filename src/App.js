import Popup from './components/Popup';
import './App.css';
import React, { useState, useEffect} from 'react'


function App() {
  document.title = 'Glassmorphism Popup'
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <main>
        <div className="container" id="container">
          <h1>What is Glassmorphism?</h1>
          <br></br>
          <h4>Glassmorphism is a unified name for the popular Frost...</h4>
          <br></br>
          <button
            className="btn"
            onClick={() => setButtonPopup(true)}>Read More
          </button>
        </div>
        
      </main>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        >
      </Popup>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import plus from './plus.png';
import './App.css';
import Timer from './Timer.js';

function App() {
  const [timer, showTimer] = useState(false);
  if (timer) {
    return <Timer />;
  }
  return (
    <div className="App">
      <div title="+" className="button">
        <div onClick={() => showTimer(true)}>
          <img src={plus} alt="add-new" height="100px"/>
        </div>
      </div>
      <div className="count">
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="count">
        <p className="down" style={{ marginLeft: '50px' }}>
          COUNT
        </p>
      </div>
      <div className="count" style={{ marginLeft: '100px' }}>
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="count" style={{ marginLeft: '150px' }}>
        <p className="down">
          COUNT
        </p>
      </div>
      <div className="count" style={{ marginLeft: '200px' }}>
        <p className="down">
          DOWN
        </p>
      </div>
      <div className="count" style={{ marginLeft: '250px' }}>
        <p className="down">
          COUNT
        </p>
      </div>
      <div className="count" style={{ marginLeft: '300px' }}>
        <p className="down">
          DOWN
        </p>
      </div>
    </div>
  );
}

export default App;

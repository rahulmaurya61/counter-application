import React from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import FunctionalCounter from './components/FunctionalCounter.jsx'; 
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application </h1>
      <div className="counters-row">
        <ClassCounter />
        <FunctionalCounter />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
        {/* Sidebar */}
        <div className="app__body">
          <Sidebar />
        </div>
        
        {/* body */}
        {/* widgets */}
    </div>
  );
}

export default App;

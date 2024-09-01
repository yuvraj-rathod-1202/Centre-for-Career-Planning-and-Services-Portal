// App.js
import React, { useEffect } from 'react';
import './App.css';
import { initializeSidebarMenu } from './script.js';

const App = () => {
  useEffect(() => {
    // Initialize the sidebar menu functionality when the component mounts
    initializeSidebarMenu();
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
            <h2>CCPS</h2>
        </div>
        <ul className="sidebar-menu">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#edit-profile">Edit Profile</a></li>
            <li><a href="#logout">Logout</a></li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome to CCPS</h1>
        <p>Select an option from the sidebar to proceed.</p>
      </div>
    </div>
  );
}

export default App;

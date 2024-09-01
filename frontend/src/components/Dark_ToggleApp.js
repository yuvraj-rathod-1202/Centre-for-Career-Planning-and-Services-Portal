import './App.css';
import React, { useState, useEffect } from 'react';
import { initializeThemeSwitcher } from './script.js';

const App = () => {
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    // Initialize the theme switcher and set up the event listener
    const cleanup = initializeThemeSwitcher(setTheme);
    
    // Cleanup function to remove event listener on unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    // Apply the theme to the body when theme state changes
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <div className="theme-toggle">
        <label htmlFor="theme-switch">Dark Mode</label>
        <label className="switch">
          <input 
            type="checkbox" 
            id="theme-switch" 
            checked={theme === "dark-mode"} // Ensure checkbox reflects current theme
            onChange={() => setTheme((prevTheme) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"))} // Toggle theme state
          />
          <span className="slider round"></span>
        </label>
      </div>
      <h1>Welcome to My App</h1>
      <p>This is a sample paragraph.</p>
    </div>
  );
}

export default App;

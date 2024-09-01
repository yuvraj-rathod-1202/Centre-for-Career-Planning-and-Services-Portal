export function initializeThemeSwitcher(setTheme) {
    const toggleSwitch = document.getElementById("theme-switch");
  
    // Retrieve the saved theme from local storage or default to light mode
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    setTheme(savedTheme); // Set initial theme using the React state setter
  
    // Update the toggle switch state to match the saved theme
    toggleSwitch.checked = savedTheme === "dark-mode";
  
    // Add an event listener to handle theme changes
    const handleChange = () => {
      const newMode = toggleSwitch.checked ? "dark-mode" : "light-mode";
      setTheme(newMode); // Update the theme state in React
      document.body.className = newMode; // Apply the selected mode to the body
      localStorage.setItem("theme", newMode); // Save the selected mode in local storage
    };
  
    toggleSwitch.addEventListener("change", handleChange);
  
    // Cleanup function to remove the event listener
    return () => {
      toggleSwitch.removeEventListener("change", handleChange);
    };
  }
  
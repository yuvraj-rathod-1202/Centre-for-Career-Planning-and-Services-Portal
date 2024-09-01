import React from 'react';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported
import SignInForm from './components/SignInForm';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/> {/* for testing purposes */}
      {/* <Navbar/>
     <SignInForm />
      <Footer /> */}
    </div>
  );
}

export default App;

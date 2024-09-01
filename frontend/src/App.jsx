import React from 'react';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported
import SignInForm from './components/SignInForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
     <SignInForm />
      <Footer />
    </div>
  );
}

export default App;

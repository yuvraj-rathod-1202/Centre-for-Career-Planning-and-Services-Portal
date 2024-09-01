import React from 'react';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported
import SignInForm from './components/SignInForm';
import Navbar from './components/Navbar';
import SavedApplications from './pages/Savedapplications';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Sidebar/>}></Route>
    //   <Route path='/saved-applications' element={<SavedApplications/>}></Route>
    // </Routes>
    <div>
      <SavedApplications/>
      {/* <Navbar/>
     <SignInForm />
      <Footer /> */}
    </div>
  );
}

export default App;

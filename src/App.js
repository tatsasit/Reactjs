import React from 'react';
import TopBar from './components/TopBar'
import Navbar from './components/Navbar';
import Heor from './components/Heor';
import Activites from './components/Activites';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <TopBar/>
      <Navbar/>
      <Heor />
      <Activites/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

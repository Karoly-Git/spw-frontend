import { useState } from 'react';

import Header from './layouts/Header';
import Footer from './layouts/Footer'

import './assets/styles/App.css'
import './assets/styles/Header.css'
import './assets/styles/Footer.css'
import './assets/styles/Navigations.css'

export default function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileNavDisplayed, setIsMobileNavDisplayed] = useState(false);

  function toggleHamburger() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  function toggleMenu() {
    setIsMobileNavDisplayed(!isMobileNavDisplayed);
  }

  return (
    <div className='App'>
      <Header isMobileNavOpen={isMobileNavOpen} toggleHamburger={toggleHamburger} toggleMenu={toggleMenu} />
      <Footer />
    </div>
  )
}

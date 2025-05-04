import Header from './layouts/Header';
import MainContent from './layouts/MainContent';
import Footer from './layouts/Footer'

import './assets/styles/App.css'

import './assets/styles/Header.css'
import './assets/styles/Footer.css'
import './assets/styles/Navigations.css'
import './assets/styles/Sliders.css'
import './assets/styles/Banner.css'
import './assets/styles/ScrollUp.css'
import './assets/styles/ShareButton.css'

import './assets/styles/Counters.css'
import './assets/styles/PhotographyPackeges.css'

import './assets/styles/Pages.css'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

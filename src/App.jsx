import Header from './layouts/Header';
import MainContent from './layouts/MainContent';
import Footer from './layouts/Footer'

import './assets/styles/App.css'
import './assets/styles/Header.css'
import './assets/styles/Footer.css'
import './assets/styles/Navigations.css'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

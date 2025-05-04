import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Awards from "../pages/Awards";
import Faq from "../pages/Faq";
import Testimonials from "../pages/Testimonials";
import Portfolio from "../pages/Portfolio";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PhotoAlbum from "../pages/PhotoAlbum";
import PageNotFound from "../pages/PageNotFound";
import Booking from "../pages/Booking";

import {
    maternityPhotos,
    newbornPhotos,
    sitterSessionPhotos,
    familyPhotos,
    cakeSmashPhotos,
    engagementPhotos
} from '../assets/utils/photos.js';
import ScrollUp from "../components/ScrollUp.jsx";


export default function MainContent() {
    return (
        <main>
            <ScrollUp />
            <Routes>
                <Route path='*' element={<PageNotFound />} />

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/frequently-asked-questions' element={<Faq />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/booking' element={<Booking />} />

                <Route path='/privacy-policy' element={<PrivacyPolicy />} />

                <Route path='/portfolio/maternity' element={<PhotoAlbum photos={maternityPhotos} albumName='Maternity photos' />} />
                <Route path='/portfolio/newborn' element={<PhotoAlbum photos={newbornPhotos} albumName='Newborn photos' />} />
                <Route path='/portfolio/sitter-session' element={<PhotoAlbum photos={sitterSessionPhotos} albumName='Sitter Session photos' />} />
                <Route path='/portfolio/family' element={<PhotoAlbum photos={familyPhotos} albumName='Family photos' />} />
                <Route path='/portfolio/cake-smash' element={<PhotoAlbum photos={cakeSmashPhotos} albumName='Cake Smash photos' />} />
                <Route path='/portfolio/engagement' element={<PhotoAlbum photos={engagementPhotos} albumName='Engagement photos' />} />
            </Routes>
        </main>
    )
}

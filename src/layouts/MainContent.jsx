import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function MainContent() {
    return (
        <main>
            <Routes>
                <Route path='*' element={<h1>Page not found</h1>} />

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                {/*<>
                    <Route path='/portfolio' element={<Gallery />} />
                    <Route path='/testimonials' element={<Reviews />} />
                    <Route path='/questions-and-answers' element={<Faq />} />
                    <Route path='/awards' element={<Awards />} />

                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />

                    <Route path='/portfolio/maternity' element={<PhotoAlbum photos={maternityPhotos} albumName='Maternity photos' />} />
                    <Route path='/portfolio/newborn' element={<PhotoAlbum photos={newbornPhotos} albumName='Newborn photos' />} />
                    <Route path='/portfolio/sitter-session' element={<PhotoAlbum photos={sitterSessionPhotos} albumName='Sitter Session photos' />} />
                    <Route path='/portfolio/family' element={<PhotoAlbum photos={familyPhotos} albumName='Family photos' />} />
                    <Route path='/portfolio/cake-smash' element={<PhotoAlbum photos={cakeSmashPhotos} albumName='Cake Smash photos' />} />
                    <Route path='/portfolio/engagement' element={<PhotoAlbum photos={engagementPhotos} albumName='Engagement photos' />} />
                </>*/}

            </Routes>
        </main>
    )
}

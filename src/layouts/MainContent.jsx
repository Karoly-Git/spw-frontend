export default function MainContent() {
    return (
        <main>
            <Routes>
                <Route path='*' element={<h1>Page not found</h1>} />

                <Route path='/' element={<Home />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/about' element={<About />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='/privacy-policy' element={<PrivacyPolicy />} />

                <Route path='/gallery/maternity' element={<PhotoAlbum photos={maternityPhotos} albumName='Maternity photos' />} />
                <Route path='/gallery/newborn' element={<PhotoAlbum photos={newbornPhotos} albumName='Newborn photos' />} />
                <Route path='/gallery/sitter-session' element={<PhotoAlbum photos={sitterSessionPhotos} albumName='Sitter Session photos' />} />
                <Route path='/gallery/family' element={<PhotoAlbum photos={familyPhotos} albumName='Family photos' />} />
                <Route path='/gallery/cake-smash' element={<PhotoAlbum photos={cakeSmashPhotos} albumName='Cake Smash photos' />} />
                <Route path='/gallery/engagement' element={<PhotoAlbum photos={engagementPhotos} albumName='Engagement photos' />} />

            </Routes>
        </main>
    )
}

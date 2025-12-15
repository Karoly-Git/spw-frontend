import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Awards from "../pages/Awards"
import Faq from "../pages/Faq"
import Testimonials from "../pages/Testimonials"
import Portfolio from "../pages/Portfolio"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import PhotoAlbum from "../pages/PhotoAlbum"
import PageNotFound from "../pages/PageNotFound"
import Booking from "../pages/Booking"

import {
    maternityPhotos,
    newbornPhotos,
    sitterSessionPhotos,
    familyPhotos,
    cakeSmashPhotos,
    engagementPhotos
} from "../assets/utils/photos.js"

import ScrollUpButton from "../components/buttons/ScrollUpButton.jsx"

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
    >
        {children}
    </motion.div>
)

export default function MainContent() {
    const location = useLocation()

    return (
        <main>
            <ScrollUpButton />

            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="*" element={<PageWrapper><PageNotFound /></PageWrapper>} />

                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                    <Route path="/awards" element={<PageWrapper><Awards /></PageWrapper>} />
                    <Route path="/frequently-asked-questions" element={<PageWrapper><Faq /></PageWrapper>} />
                    <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
                    <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
                    <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />

                    <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />

                    <Route
                        path="/portfolio/maternity"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={maternityPhotos} albumName="Maternity photos" />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/portfolio/newborn"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={newbornPhotos} albumName="Newborn photos" />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/portfolio/sitter-session"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={sitterSessionPhotos} albumName="Sitter Session photos" />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/portfolio/family"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={familyPhotos} albumName="Family photos" />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/portfolio/cake-smash"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={cakeSmashPhotos} albumName="Cake Smash photos" />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/portfolio/engagement"
                        element={
                            <PageWrapper>
                                <PhotoAlbum photos={engagementPhotos} albumName="Engagement photos" />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </main>
    )
}

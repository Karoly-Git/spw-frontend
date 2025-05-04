import { useState } from "react";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
    maternityPhotos,
    newbornPhotos,
    sitterSessionPhotos,
    familyPhotos,
    cakeSmashPhotos,
    engagementPhotos
} from '../assets/utils/photos.js';

import index1 from "../assets/images/portfolio/maternity-index.jpg";
import index2 from "../assets/images/portfolio/newborn-index.jpg";
import index3 from "../assets/images/portfolio/sitter-index.jpg";
import index4 from "../assets/images/portfolio/family-index.jpg";
import index5 from "../assets/images/portfolio/cakesmash-index.jpg";
import index6 from "../assets/images/portfolio/engagement-index.jpg";

import ShareButton from "../components/ShareButton.jsx";

export default function Portfolio() {
    const [maternityIndex, setMaternityIndex] = useState(-1);
    const [newbornIndex, setNewbornIndex] = useState(-1);
    const [sitterSessionIndex, setSitterSessionIndex] = useState(-1);
    const [familyIndex, setFamilyIndex] = useState(-1);
    const [cakeSmashIndex, setCakeSmashIndex] = useState(-1);
    const [engagementIndex, setEngagementIndex] = useState(-1);

    const indexImages = [
        {
            src: index1,
            alt: "Maternity Photos",
            description: "Elegant and emotive portraits that capture the anticipation, beauty, and glow of motherhood before your baby arrives.",
            setIndex: setMaternityIndex,
        },
        {
            src: index2,
            alt: "Newborn Photos",
            description: "Gentle, cozy, and artistic imagery to preserve those fleeting, magical early days of your newborn's life.",
            setIndex: setNewbornIndex,
        },
        {
            src: index3,
            alt: "Sitter Session Photos",
            description: "Adorable milestones captured as your baby begins to sit up, smile, and show their developing personality.",
            setIndex: setSitterSessionIndex,
        },
        {
            src: index4,
            alt: "Family Photos",
            description: "Candid and posed moments that tell the story of your family’s connection, laughter, and love.",
            setIndex: setFamilyIndex,
        },
        {
            src: index5,
            alt: "Cake Smash Photos",
            description: "Colorful, fun-filled sessions that celebrate your baby’s first year with frosting, giggles, and lots of cake!",
            setIndex: setCakeSmashIndex,
        },
        {
            src: index6,
            alt: "Engagement Photos",
            description: "Romantic and joyful storytelling imagery to capture the excitement and connection leading up to your big day.",
            setIndex: setEngagementIndex,
        }
    ];

    return (
        <div className='page portfolio-page'>

            <ShareButton />

            <div className='content'>
                <div className="image-grid">
                    {indexImages.map((image, index) => (
                        <div className="image-item" key={index} onClick={() => image.setIndex(0)}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="portfolio-name">{image.alt}</div>
                            <div className="portfolio-description">{image.description}</div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    slides={maternityPhotos}
                    open={maternityIndex >= 0}
                    index={maternityIndex}
                    close={() => setMaternityIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />

                <Lightbox
                    slides={newbornPhotos}
                    open={newbornIndex >= 0}
                    index={newbornIndex}
                    close={() => setNewbornIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />

                <Lightbox
                    slides={sitterSessionPhotos}
                    open={sitterSessionIndex >= 0}
                    index={sitterSessionIndex}
                    close={() => setSitterSessionIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />

                <Lightbox
                    slides={familyPhotos}
                    open={familyIndex >= 0}
                    index={familyIndex}
                    close={() => setFamilyIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                <Lightbox
                    slides={cakeSmashPhotos}
                    open={cakeSmashIndex >= 0}
                    index={cakeSmashIndex}
                    close={() => setCakeSmashIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />

                <Lightbox
                    slides={engagementPhotos}
                    open={engagementIndex >= 0}
                    index={engagementIndex}
                    close={() => setEngagementIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </div>
    );
}

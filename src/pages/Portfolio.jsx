import React, { useState } from 'react';

import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { CiShare2 as ShareIcon } from "react-icons/ci";

import { maternityPhotos } from '../../data/photos.js';
import { newbornPhotos } from '../../data/photos.js';
import { sitterSessionPhotos } from '../../data/photos.js';
import { familyPhotos } from '../../data/photos.js';
import { cakeSmashPhotos } from '../../data/photos.js';
import { engagementPhotos } from '../../data/photos.js';

import index1 from "../../img/gallery/maternity-index.jpg";
import index2 from "../../img/gallery/newborn-index.jpg";
import index3 from "../../img/gallery/sitter-index.jpg";
import index4 from "../../img/gallery/family-index.jpg";
import index5 from "../../img/gallery/cakesmash-index.jpg";
import index6 from "../../img/gallery/engagement-index.jpg";

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
            setIndex: setMaternityIndex,
        },
        {
            src: index2,
            alt: "Newborn Photos",
            setIndex: setNewbornIndex,
        },
        {
            src: index3,
            alt: "Sitter Session Photos",
            setIndex: setSitterSessionIndex,
        },
        {
            src: index4,
            alt: "Family Photos",
            setIndex: setFamilyIndex,
        },
        {
            src: index5,
            alt: "Cake Smash Photos",
            setIndex: setCakeSmashIndex,
        },
        {
            src: index6,
            alt: "Engagement Photos",
            setIndex: setEngagementIndex,
        }
    ];


    return (
        <div className='page gallery-page'>

            <div className='share-button'
                onClick={() => {
                    const shareUrl = encodeURIComponent('https://www.sparklingwillowphotography.co.uk/');
                    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
                    window.open(facebookShareUrl, '_blank');
                }} >
                <ShareIcon className='icon' />
            </div>



            <div className='content'>
                <div className="image-grid">
                    {indexImages.map((image, index) => (
                        <div className="image-item" key={index} onClick={() => image.setIndex(0)}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="gallery-name">{image.alt}</div>
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





import { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import ShareButton from '../components/ShareButton';

export default function PhotoAlbum({ photos, albumName }) {
    const [index, setIndex] = useState(-1);

    return (
        <div className="page album-page">
            <ShareButton />
            <div className="album-header">
                <h1>{albumName}</h1>
            </div>
            <div className="album-content">
                <MasonryPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => setIndex(index)}
                />
            </div>
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photos.map(({ src, width, height }) => ({ src, width, height }))}
                index={index}
                animation={{ zoom: true }}
            />
        </div>
    );
}

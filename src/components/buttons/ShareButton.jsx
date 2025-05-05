import { CiShare2 as ShareIcon } from "react-icons/ci";

export default function ShareButton() {
    return (
        <div className='screen-side-btn share-btn'
            onClick={() => {
                const shareUrl = encodeURIComponent('https://www.sparklingwillowphotography.co.uk/');
                const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
                window.open(facebookShareUrl, '_blank');
            }} >
            <ShareIcon className='icon' />
        </div>
    )
}

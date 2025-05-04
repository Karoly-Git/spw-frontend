import { NavLink } from 'react-router-dom';

import { IoIosPhotos as AlbumIcon } from "react-icons/io";

export default function CategoryBox({ category, flipped }) {
    function getShortText(text, n) {
        const words = text.split(' ');
        if (words.length <= n) {
            return text;
        }
        return words.slice(0, n).join(' ') + '...';
    }


    return (
        <div className='category-container'>
            <div className={flipped ? 'category-box flipped' : 'category-box'}>

                <div className='category-photo-box'>
                    <div className={category.name}>
                        <NavLink
                            to={'/gallery' + category.album}
                            title='Go to album'
                        >
                            <AlbumIcon className='icon' />
                        </NavLink>
                    </div>
                </div>

                <div className='category-description-box'>
                    <h3>
                        {category.name}
                    </h3>
                    <p className='grad-text long'>{category.p}</p>
                    <p className='grad-text short'>{getShortText(category.p, 15)}</p>
                </div>

            </div>
        </div>
    );
}

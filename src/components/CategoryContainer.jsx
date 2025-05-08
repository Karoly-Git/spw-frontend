import { NavLink } from 'react-router-dom';
import { IoIosPhotos as AlbumIcon } from "react-icons/io";

export default function CategoryContainer({ category, flipped }) {
    function getShortText(text, n) {
        const words = text.split(' ');
        if (words.length <= n) {
            return text;
        }
        return words.slice(0, n).join(' ') + '...';
    }

    return (
        <section
            className='category-container'
            role='region'
            aria-label={`Category section: ${category.name}`}
        >
            <article
                className={flipped ? 'category-box flipped' : 'category-box'}
                aria-labelledby={`heading-${category.name}`}
            >
                <header className='category-photo-box'>
                    <h2 id={`heading-${category.name}`}>{category.tagline}</h2>
                    <div className={category.name}>
                        <NavLink
                            to={'/portfolio' + category.album}
                            title={`Go to ${category.name} album`}
                            aria-label={`Go to ${category.name} album`}
                        >
                            <AlbumIcon className='icon' aria-hidden='true' />
                        </NavLink>
                    </div>
                </header>

                <div
                    className='category-description-box'
                    role='group'
                    aria-label={`Description of ${category.name}`}
                >
                    <h3>{category.name}</h3>
                    <p className='grad-text long'>{category.p}</p>
                    <p className='grad-text short'>{getShortText(category.p, 15)}</p>
                </div>
            </article>
        </section>
    );
}

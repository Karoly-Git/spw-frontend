import React from 'react';
import me from '../../img/about/me.jpg';

export default function About() {
    return (
        <div className="page about-page">
            <div className="content">
                <div className='wrapper'>
                    <div className="about-header">
                        <img src={me} alt="Nicky - Sparkling Willow Photography" />
                        <h1>Hi, I'm <strong>Nicky</strong></h1>
                    </div>
                    <div className="about-details">
                        <p>
                            I'm a proud mum of three beautiful girls! After my first two daughters were born,
                            I decided to turn my passion for photography into a career. Thus, <strong>Sparkling Willow Photography</strong> was born!
                        </p>
                        <p>
                            My love for photography has driven me to continuously learn and build a portfolio that I'm truly proud of.
                        </p>
                        <p>
                            I strive to create timeless, beautiful images that capture life's most precious moments, and nothing makes me happier
                            than knowing my clients love their photos.
                        </p>
                        <p>
                            I've been fortunate to receive several awards for my work, which motivates me to continually improve and
                            achieve my goals in the photography world.
                        </p>
                        <p>
                            I specialize in Maternity, Newborn, Sitter, Cake Smash, Family, and Engagement shoots, and I occasionally
                            cover baptisms and weddings.
                        </p>
                        <p>
                            My home studio is located in Cheam, Sutton, and I also offer outdoor location shoots in nearby areas.
                        </p>
                        <p>
                            I look forward to working with you and capturing moments you'll treasure forever. Feel free to reach out
                            if you have any questions or would like to book a session!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

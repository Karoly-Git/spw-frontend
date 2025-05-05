import InfoNav from "../components/navigations/InfoNav";
import BottomNav from "../components/navigations/BottomNav";
import SocialNav from "../components/navigations/SocialNav";

export default function Footer() {
    const locations = [
        "South London",
        "North Cheam",
        "Cheam Village",
        "South Cheam",
        "Sutton Town Centre",
        "North Sutton",
        "Carshalton",
        "Belmont",
        "Sutton Common",
        "Rosehill"
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <h3>Covering South London</h3>

            <div className='footer-info'>
                <div className='footer-section col-1'>
                    <InfoNav />
                </div>

                <div className='footer-section col-2'>
                    <ul>
                        {locations.map(location => (
                            <li key={location}>{location}</li>
                        ))}
                    </ul>
                </div>

                <div className='footer-section col-3'>
                    <BottomNav />
                </div>
            </div>

            <SocialNav />

            <div className='copyright'>
                <span>© {currentYear} Sparkling Willow Photography</span>
                <a href="https://karolyhornyak.co.uk" target="_blank" rel="noopener noreferrer">
                    Website made by Karoly Hornyak
                </a>
            </div>
        </footer>
    );
}

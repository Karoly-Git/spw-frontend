export default function PhotographyPackages({ firstIndex, lastIndex }) {
    const packages = [
        {
            title: "Maternity Photoshoot",
            price: "£100",
            description:
                "Celebrate the beauty and anticipation of motherhood with a relaxed session in the studio or outdoors. We'll capture your glow and the love growing within."
        },
        {
            title: "Newborn Photography",
            price: "£100",
            description:
                "Preserve the fleeting moments of your baby's earliest days with a calm, gentle shoot designed to capture their tiny details and first expressions."
        },
        {
            title: "Sitter Session",
            price: "£100",
            description:
                "Perfect for babies sitting unaided, these joyful sessions highlight blossoming personalities, curious expressions, and those adorable baby grins."
        },
        {
            title: "Family Photography",
            price: "£100",
            description:
                "Enjoy a fun and natural session with your loved ones, designed to capture the warmth, laughter, and love that make your family unique."
        },
        {
            title: "Cake Smash Photoshoot",
            price: "£100",
            description:
                "Celebrate your little one's birthday with a fun-filled cake smash session full of giggles, frosting, and candid memories to cherish."
        },
        {
            title: "Engagement Photoshoot",
            price: "£100",
            description:
                "Capture your love story at the start of something beautiful. Whether you're announcing your engagement or just celebrating it, this shoot is all about you."
        },
    ];

    const slicedPackage = packages.slice(firstIndex, lastIndex);

    return (
        <section
            className="photography-packages"
            aria-label="Photography packages offered"
        >
            <div className="package-container">
                {slicedPackage.map((pkg, index) => (
                    <article
                        className="package-card"
                        key={index}
                        aria-labelledby={`package-title-${index}`}
                    >
                        <h3 id={`package-title-${index}`}>{pkg.title}</h3>
                        {/* You can re-enable price display here if needed */}
                        {/* <p className="price">FROM {pkg.price}</p> */}
                        <p className="description">{pkg.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

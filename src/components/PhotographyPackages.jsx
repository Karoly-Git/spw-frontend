import React from "react";

const PhotographyPackages = () => {
    const packages = [
        {
            title: "Maternity Photoshoot",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
        {
            title: "Newborn Baby Photography",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
        {
            title: "Sitter Session",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
        {
            title: "Family Photography",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
        {
            title: "Cake Smash Photoshoot",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
        {
            title: "Engagement Photoshoot",
            price: "£100",
            description:
                "This session is the one for you even if you have never booked anything like this before, or you're not sure you're even a “family photo shoot” family. We guarantee a fantastic day with memories to treasure forever.",
        },
    ];

    return (
        <div className="photography-packeges">
            <div className="package-container">
                {packages.map((pkg, index) => (
                    <div className="package-card" key={index}>
                        <h4>{pkg.title}</h4>
                        <p className="price">FROM {pkg.price}</p>
                        <p className="description">{pkg.description}</p>
                        <button>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotographyPackages;

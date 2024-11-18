import React from "react";

import './pricing.css'

const Pricing = () => {
    return(
        <div className="pricing-outer">
            <h3>PRICING</h3>
            <div className="pricing-cards">
            
            <div className="Cards">
                <h2>BASIC</h2>
                <ul>
                    <li>3 page Custom website</li>
                    <li>Use your own domain name</li>
                    <li>Booking system intergrated</li>
                    <li>Self hosting</li>
                    <li>SEO optimization</li>
                    <li>No weekly updates</li>
                </ul>
                <h2>500$</h2>
            </div>
            <div className="Cards">
                <h2>STANDARD</h2>
                <ul>
                    <li>5 page Custom website</li>
                    <li>extra pages for 50$/page</li>
                    <li>Free domain name</li>
                    <li>Managed hosting</li>
                    <li>Unlimited emails</li>
                    <li>Google business listing</li>
                    <li>SEO optimization</li>
                    <li>Weekly updates and maintenance</li>
                </ul>
                <h2>400$</h2><h6>+50$/month</h6>
                
            </div>
            <div className="Cards">
                <h2>ENTERPRISE</h2>
                <ul>
                    <li>10 page Custom website</li>
                    <li>extra pages for FREE</li>
                    <li>E-commerce intergration</li>
                    <li>Booking system intergrated</li>
                    <li>Free domain name</li>
                    <li>Managed hosting</li>
                    <li>Google business listing</li>
                    <li>SEO optimization</li>
                    <li>Unlimited emails</li>
                    <li>Priority updates and maintenance</li>
                </ul>
                <h2>800$</h2><h6>+100$/month</h6>
            </div>

        </div>
        </div>
    )
}

export default Pricing
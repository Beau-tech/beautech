import React, { useEffect, useRef } from "react";
import './about.css'

const About = () => {
    // Create refs for each grid item
    const gridItemsRef = useRef([]);

    // Set up the IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'animate' class when the element is in the viewport
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Optional: unobserve once animated
                }
            });
        }, {
            threshold: 0.5, // Trigger when the element is 50% in the viewport
        });

        // Observe each grid item (ref array)
        gridItemsRef.current.forEach(item => {
            observer.observe(item);
        });

        // Clean up observer on unmount
        return () => {
            gridItemsRef.current.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className="body-about">
            <h3>Why choose us?</h3>
            <div className="write-up">
                <div className="About-box">
                    <h4>
                        At Beau-Tech, we specialize in creating stunning, functional websites tailored for beauty professionals. Whether you’re a salon owner, nail tech, barber, or makeup artist, we help you showcase your brand and attract more clients.

                        We handle all the technical details—from setup to maintenance—so you can focus on your craft. With features like online booking, client reviews, and SEO optimization, we make it easy for your business to thrive online.

                        Choose Beau-Tech for a partner who understands your industry and is committed to your success. Let’s bring your beauty to the internet!
                    </h4>
                </div>
            </div>
            <h4>Our clients are primarily:</h4>
            <div className="About-grid">
                <div ref={(el) => gridItemsRef.current[0] = el}>
                    <img src="/images/svgs/hair-clipper.svg" alt="clippers" />
                    <h4>Barbers</h4>
                </div>
                <div ref={(el) => gridItemsRef.current[1] = el}>
                    <img src="/images/svgs/manicure.svg" alt="mani" />
                    <h4>Nail technicians</h4>
                </div>
                <div ref={(el) => gridItemsRef.current[2] = el}>
                    <img src="/images/svgs/hair.svg" alt="salon" />
                    <h4>Hair dressers</h4>
                </div>
                <div ref={(el) => gridItemsRef.current[3] = el}>
                    <img src="/images/svgs/massage.svg" alt="mass" />
                    <h4>Masseuses</h4>
                </div>
                <div ref={(el) => gridItemsRef.current[4] = el}>
                    <img src="/images/svgs/makeup.svg" alt="mua" />
                    <h4>Make-up Artists</h4>
                </div>
                <div ref={(el) => gridItemsRef.current[5] = el}>
                    <img src="/images/svgs/makeup.svg" alt="mua" />
                    <h4>Tattoo parlors</h4>
                </div>
            </div>
            <div className="write-up">
                <h3>Why Custom Coded?</h3>
                <div className="About-box">
                    <h4>At Beau-Tech:</h4>
                    <h4>
                        We refrain from using website builders because custom-coded websites provide unmatched performance, flexibility, and scalability. This approach ensures your site is uniquely designed and optimized for your beauty business, offering faster load times, seamless user experiences, and the ability to grow with your needs. With custom coding, we deliver a website that truly reflects your brand and stands out from competitors, giving you a professional edge in the digital space.
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default About;

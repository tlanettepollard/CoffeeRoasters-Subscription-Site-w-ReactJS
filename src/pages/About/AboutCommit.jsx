import { useEffect, useState } from 'react';

export function AboutCommit() {
    const css = `@media (max-width: 767px) {
        .about-commit-image {
            background-image: url('/public/assets/about/mobile/image-commitment.jpg')
        }
    }
    @media (min-width: 768px) {
        .about-commit-image {
            background-image: url('/public/assets/about/tablet/image-commitment.jpg')
        }
    }
    @media (min-width: 1200px){
        .about-commit-image {
            background-image: url('/public/assets/about/desktop/image-commitment.jpg')
        }
    }`;

    return (
        <div className="about-section1">
            <style scoped>{css}</style>
            <div className="about-commit-container">
                <div className="about-commit-image"></div>
                <div className="about-commit-copy">
                    <p className="about-commit-title">Our commitment</p>
                    <p className="about-commit-body">
                        We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
                    </p>
                </div>
            </div>
        </div>
    );
}
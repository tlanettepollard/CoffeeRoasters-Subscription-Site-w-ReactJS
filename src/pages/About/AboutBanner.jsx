export function AboutBanner() {
    const css = `@media (max-width: 767px) {
        .about-banner-image {
            background-image: url('/assets/about/mobile/image-hero-whitecup.jpg')
        }
    }
    @media (min-width: 768px) {
        .about-banner-image {
            background-image: url('/assets/about/tablet/image-hero-whitecup.jpg')
        }
    }
    @media (min-width: 1200px) {
        .about-banner-image {
            background-image: url('/assets/about/desktop/image-hero-whitecup.jpg');
        }
    }`;


    return (
        <div className="about-banner">
            <style scoped>{css}</style>
            <div className="about-banner-image">
                <div className="about-banner-container">
                    <p className="about-banner-title">
                        About us
                    </p>
                    <p className="about-banner-body">
                        Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                    </p>
                </div>
            </div>
        </div>

    );
}
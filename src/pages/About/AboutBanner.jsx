export function AboutBanner() {
    const css = `@media (max-width: 767px) {
        .about-banner-image {
            background-image: url('/public/assets/about/mobile/image-hero-whitecup.jpg')
        }
    }
    @media (min-width: 768px) {
        .about-banner-image {
            background-image: url('/public/assets/about/tablet/image-hero-whitecup.jpg')
        }
    }
    @media (min-width: 1200px) {
        .about-banner-image {
            background-image: url('/public/assets/about/desktop/image-hero-whitecup.jpg');
        }
    }`;


    return (
        <div className="about-banner">
            <style scoped>{css}</style>
            <div className="about-banner-image">

            </div>
        </div>

    );
}
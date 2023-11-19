export function SubscribeBanner() {
    const css = `@media (max-width: 767px){
        .subscribe-banner-image {
            background-image: url('/public/assets/plan/mobile/image-hero-blackcup.jpg')
        }
    }
    @media (min-width: 768px) {
        .subscribe-banner-image {
            background-image: url('/public/assets/plan/tablet/image-hero-blackcup.jpg')
        }
    }
    @media (min-width: 1200px) {
        background-image: url('/public/assets/plan/desktop/image-hero-blackcup.jpg');
    }`;

    return (
        <div className="subscribe-banner">
            <style scoped>{css}</style>
            <div className="subscribe-banner-image">
                <div className="subscribe-banner-container">
                    <p className="subscribe-banner-title">
                        Create a plan
                    </p>
                    <p className="subscribe-banner-body">
                        Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
                    </p>
                </div>
            </div>
        </div>
    )
}
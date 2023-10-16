import { useNavigate } from "react-router-dom";

export function HomeBanner() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    const css = `@media (max-width: 767px) {
        .home-banner-image {
            background-image: url('/public/assets/home/mobile/image-hero-coffeepress.jpg')
        }
    }
    @media (min-width: 768px) {
        .home-banner-image {
            background-image: url('/public/assets/home/tablet/image-hero-coffeepress.jpg')
        }
    }
    @media (min-width: 1200px) {
        .home-banner-image {
            background-image: url('/public/assets/home/desktop/image-hero-coffeepress.jpg');
        }
    }`;


    return (
        <div className="home-banner">
            <style scoped>{css}</style>
            <div className="home-banner-image">
                <div className="home-banner-container">
                    <p className="home-banner-title">
                        Great coffee <br /> made simple.
                    </p>
                    <p className="home-banner-body">
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                    </p>
                    <button onClick={changeRoute} className="primary-button">
                        Create your plan
                    </button>
                </div>
            </div>
        </div>
    )
};

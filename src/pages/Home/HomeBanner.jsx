import { useNavigate } from "react-router-dom";

export function HomeBanner() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }


    return (
        <div className="home-banner">
            <div className="home-banner-image" style={{ backgroundImage: "url('/public/assets/home/mobile/image-hero-coffeepress.jpg')" }}>
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

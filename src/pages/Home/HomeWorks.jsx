import { useNavigate } from "react-router-dom";

export function HomeWorks() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <div className='home-section3'>
            <div className="home-works">
                <p className="works-title">How it works</p>
                <div className="works-container">
                    <div className="works-card">
                        <div className="works-number">01</div>
                        <div className="works-step">Pick your coffee</div>
                        <div className="works-detail">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</div>
                    </div>

                    <div className="works-card">
                        <div className="works-number">02</div>
                        <div className="works-step">Choose the frequency</div>
                        <div className="works-detail">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</div>
                    </div>

                    <div className="works-card">
                        <div className="works-number">03</div>
                        <div className="works-step">Receive and enjoy!</div>
                        <div className="works-detail">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</div>
                    </div>
                </div>
                <button onClick={changeRoute} className="button-home-works">
                    Create your plan
                </button>
            </div>
        </div>
    );
}
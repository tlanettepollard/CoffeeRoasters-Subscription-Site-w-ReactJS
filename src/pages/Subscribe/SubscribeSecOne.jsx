export function SubscribeSecOne() {
    const css = `@media (max-width: 767px){
        .bg-howto-image{
            background-image: url('/public/assets/plan/mobile/bg-steps.png')
        }
    }
    @media (min-width: 768px) {
        .bg-howto-image{
            background-image: url('/public/assets/plan/tablet/bg-steps.png')
        }
    }
    @media (min-width: 1200px){
        .bg-howto-image{
            background-image: url('/public/assets/plan/desktop/bg-steps.png')
        }
    }`;


    return (
        <div className="subscribe-section1">
            <style scoped>{css}</style>
            <div className="accent-image"></div>
            <div className="subscribe-howto">
                <div className="howto-container">
                    <div className="howto-card">
                        <p className="howto-card-number">01</p>
                        <p className="howto-card-step">Pick your coffee</p>
                        <p className="howto-card-detail">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There's new coffees in all profiles every month for you to try out. </p>
                    </div>

                    <div className="howto-card">
                        <p className="howto-card-number">02</p>
                        <p className="howto-card-step">Choose the frequency</p>
                        <p className="howto-card-detail">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </div>

                    <div className="howto-card">
                        <p className="howto-card-number">03</p>
                        <p className="howto-card-step">Receive and enjoy!</p>
                        <p className="howto-card-detail">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
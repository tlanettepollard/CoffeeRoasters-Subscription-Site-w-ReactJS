export function HomeChoose() {
    return (
        <div className='home-section2'>
            <div className="home-choose">
                <div className="choose">
                    <p className="choose-title">Why choose us? </p>
                    <p className="choose-body">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                </div>
                <div className="choose-container">
                    <div className="choose-card">
                        <img src="/assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean icon" className="choose-card-image" />
                        <div className="choose-card-copy">
                            <p className="choose-card-title">Best quality</p>
                            <p className="choose-card-body">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>

                    <div className="choose-card">
                        <img src="/assets/home/desktop/icon-gift.svg" alt="coffee bean icon" className="choose-card-image" />
                        <div className="choose-card-copy">
                            <p className="choose-card-title">Exclusive benefits</p>
                            <p className="choose-card-body">Special offers and swag when you subscribe, including 30% off your first shipment. </p>
                        </div>
                    </div>

                    <div className="choose-card">
                        <img src="/assets/home/desktop/icon-truck.svg" alt="coffee bean icon" className="choose-card-image" />
                        <div className="choose-card-copy">
                            <p className="choose-card-title">Free shipping</p>
                            <p className="choose-card-body">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
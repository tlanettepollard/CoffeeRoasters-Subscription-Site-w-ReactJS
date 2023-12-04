export function PlanMenu() {
    return (
        <aside aria-label='aside navigation' className='plan-nav'>
            <ul className="plan-nav-list">
                <li className="plan-nav-item">
                    <a href="#preferences">
                        <span className="nav-item-num">01</span>
                        <span className="nav-item-text">Preferences</span>
                    </a>
                </li>
                <li className="plan-nav-item">
                    <a href="#bean">
                        <span className="nav-item-num">02</span>
                        <span className="nav-item-text">Bean Type</span>
                    </a>
                </li>
                <li className="plan-nav-item">
                    <a href="#quantity">
                        <span className="nav-item-num">03</span>
                        <span className="nav-item-text">Quantity</span>
                    </a>
                </li>
                <li className="plan-nav-item">
                    <a href="#grind">
                        <span className="nav-item-num">04</span>
                        <span className="nav-item-text">Grind Option</span>
                    </a>
                </li>
                <li className="plan-nav-item">
                    <a href="#deliveries">
                        <span className="nav-item-num">05</span>
                        <span className="nav-item-text">Deliveries</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
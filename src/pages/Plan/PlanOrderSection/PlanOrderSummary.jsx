export function PlanOrderSummary(props) {
    <div className="order">
        <form className="order-container">
            <div className="order-summary">
                <h3 className="order-title">Order Summary</h3>
                <p className="order-text">
                    "I drink my coffee <strong>{props.verb}</strong>
                    <span className="order-selection">{props.preferred}</span>, with a <span className="order-selection">{props.bean}</span> type of bean. <span className="order-selection">{props.quantity}</span> <strong className='show-grind'>ground ala<span className="order-selection">{props.grind}</span>, </strong> sent to me <span className="order-selection">{props.delivery}</span>."
                </p>
            </div>
            <button type="submit" className="home-primary-button order-btn disabled" title="proceed to checkout form">Create your plan</button>
        </form>
    </div>
}
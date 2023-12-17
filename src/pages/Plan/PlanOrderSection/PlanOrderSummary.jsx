export function PlanOrderSummary(preferred, beanSelection, qty, grind, deliver, verb) {

    return (
        <div className="order-container">
            <form className="order-container">
                <div className="order-summary">
                    <h3 className="order-title">Order Summary</h3>
                    <p className="order-text">
                        "I drink my coffee <strong>{verb} </strong> <span className="order-item"> {preferred}</span>,  with a <span className='order-item'> {beanSelection}</span> type of bean. <span className='order-item'> {qty}</span> <strong className='show-grind'>ground ala <span className='order-item'> {grind} </span>, </strong> sent to me <span className='order-item'> {deliver}</span>."
                    </p>
                </div>
                <button className="home-primary-button order-btn disabled" title='proceed to checkout form'>Create your plan</button>
            </form>
        </div>
    );
}
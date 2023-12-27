export function PlanCheckoutModal({ verb, prefer, bean, quantity, grind, deliver, shipping, onSubmit }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const payment = formatter.format(shipping)
    //console.log(shipping)

    return (
        <div className='subscribe-modal'>
            <form className='subscribe-modal-summary' onSubmit={onSubmit}>
                <div className="modal-title-container">
                    <h3 className="modal-title">
                        Order Summary
                    </h3>
                </div>
                <p className="modal-content">
                    "I drink my coffee <strong> {verb} </strong> <span className='order-item'> {prefer} </span>, with a <span className='order-item'> {bean} </span> type of bean.  <span className='order-item'> {quantity} </span> <strong className={`show-grind ${verb === 'using' ? 'hide-grind' : ""}`}> ground ala <span className='order-item'> {grind} </span> </strong> sent to me <span className='order-item'> {deliver} </span>."
                </p>

                <p className="order-confirm">
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                </p>

                <div className="checkout-container">
                    <span className="checkout-amount">{payment}/mo</span>
                    <button type='submit' className="modal-checkout-btn home-primary-button">Checkout</button>
                </div>
            </form>
        </div>
    );

}
export function PlanCheckoutModal(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const payment = formatter.format(props.shipping)
    console.log(props)

    return (
        <div className='suscribe-modal'>
            <form className='subscribe-modal-summary' on Submit={props.onSubmit}>
                <div className="modal-title-container">
                    <h3 className="modal-title">
                        Order Summary
                    </h3>
                </div>
                <p className="modal-content">
                    "I drink my coffee <strong> {props.verb} </strong> <span className='order-item'> {props.prefer} </span>, with a <span className='order-item'> {props.bean} </span> type of bean.  <span className='order-item'> {props.quantity} </span> <strong className={`show-grind ${props.verb === 'using' ? 'hide-grind' : ""}`}> ground ala <span className='order-item'> {props.grind} </span> </strong> sent to me <span className='order-item'> {props.deliver} </span>."
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
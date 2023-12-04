export function PlanCheckoutModal(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const payment = formatter.format(props.shipping)
    console.log(props)

    return (
        <div className='modal'>
            <form className='modal-summary' onSubmit={props.onSubmit}>
                <div className="modal-title-container">
                    <h3 className="modal-title">Order Summary</h3>
                </div>
                <p className="modal-content">
                    “I drink my coffee <strong>{props.verb}</strong>
                    <span className='order-selection'>{props.prefer}</span> , with a{" "}
                    <span className='order-selection'>{props.bean}</span> type of bean.{" "}
                    <span className='order-selection'>{props.quantity}</span>
                    <strong className={`show-grind ${props.verb === 'using' ? 'hide-grind' : ""}`}> ground ala{" "}
                        <span className='order-selection'>{props.grind}</span>,</strong> sent to me{" "}
                    <span className='order-selection'>   {props.deliver}</span>."
                </p>
                <p className="order-confirm">
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                </p>
                <div className="checkout-container">
                    <span className="checkout-amount">{payment}/mo</span>
                    <button type='submit' className='modal-checkout-btn home-primary-button'></button>
                </div>
            </form>
        </div>
    );

}
export function Modal(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    const payment = formatter.format(props.shipping)
    console.log(props)


    return (
        <div>
            <div className="modal__container">
                <form className="modal__content" onSubmit={props.onSubmit}>

                    <div className="modal__title__container">
                        <h3 className="modal__title">Order Summary</h3>
                    </div>
                    {props.isGrindDisabled ? (
                        <p className="modal__text">
                            "I drink my coffee <span className='order-options'>{props.verb}</span> <span className='order-options'>{props.drink}</span>, with a <span className='order-options'>{props.type}</span> type of bean. <span className='order-options'>{props.quantity}</span>, sent to me<span className='order-options'>{props.frequency}</span>."
                        </p>
                    ) : (
                        <p className="modal__text">
                            "I drink my coffee <span className='order-options'>{props.verb}</span> <span className='order-options'>{props.drink}</span>, with a <span className='order-options'>{props.type}</span> type of bean. <span className='order-options'>{props.quantity}</span> ground ala <span className='order-options'>{props.grind}</span> , sent to me <span className='order-options'> {props.frequency}</span>."
                        </p>
                    )}
                    <p className="modal__confirm">
                        Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                    </p>

                    <div className="modal__checkout__container">
                        <span className="checkout-amount checkout-desktop">{payment}/mo</span>
                        <button type='submit' className="modal-primary-btn checkout-desktop" onClick={props.onClick}>
                            Checkout
                        </button>

                        <button type='submit' className="modal-primary-btn checkout-mobile" onClick={props.onClick}>
                            Checkout- {payment}/mo
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}
import React from 'react';


const Modal = ({ isGrindDisabled, onSubmit, verb, drink, bean, quantity, grind, frequency, shipping, onClick }) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    const payment = formatter.format(shipping)
    console.log(shipping)

    return (
        <div>
            <div className="modal__overlay hide__overlay"></div>
            <div className="modal__container">
                <form className="modal__content" onSubmit={onSubmit}>

                    <div className="modal__title__container">
                        <h3 className="modal__title">Order Summary</h3>
                    </div>
                    {isGrindDisabled ? (
                        <p className="modal__text">
                            "I drink my coffee <strong>{verb}</strong> <span className='order-option'>{verb}</span> <span className='order-option'>{drink}</span>, with a <span className='order-option'>{bean}</span> type of bean. <span className='order-option'>{quantity}</span> <strong className={`show__grind ${verb === 'using' ? 'hide__grind' : ''}`}>ground ala <span className='order-option'>{grind}</span>, </strong> sent to me
                            <span className='order-option'>{frequency}</span>."
                        </p>
                    ) : (
                        <p className="modal__text">
                            "I drink my coffee <span className='order-option'>{verb}</span> <span className='order-option'>{drink}</span>, with a <span className='order-option'>{bean}</span> type of bean. <span className='order-option'>{quantity}</span> ground ala <span className='order-option'>{grind}</span>, sent to me <span className='order-option'> {frequency}</span>."
                        </p>
                    )}
                    <p className="modal__confirm">
                        Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                    </p>

                    <div className="modal__checkout__container">
                        <span className="checkout-amount checkout-desktop">{payment}/mo</span>
                        <button type='submit' className="modal-primary-btn checkout-desktop" onClick={onClick}>
                            Checkout
                        </button>

                        <button type='submit' className="modal-primary-btn checkout-mobile" onClick={onClick}>
                            Checkout- {payment}/mo
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Modal;
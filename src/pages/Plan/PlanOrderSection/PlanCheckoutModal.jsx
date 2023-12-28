import React, { Children, useState, useEffect } from 'react';

export function PlanCheckoutModal({ drink, type, quantity, grind, frequency, price, open, onClose }) {

    const [isNotMobile, setNotMobile] = useState(window.innerWidth > 768);

    const updateMobile = () => {
        setNotMobile(window.innerWidth > 767);
    }
    useEffect(() => {
        window.addEventListener('resize', updateMobile);
        return () => window.removeEventListener('resize', updateMobile);
    });


    if (!open) return null;
    return (
        <div>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-inner">
                    <h2 className="modal-title">Order Summary</h2>
                </div>
                <div className="modal-content">
                    <p className="modal-detail">
                        "I drink coffee <span className='summary-options'>{drink}</span>, with a <span className='summary-options'>{type}</span> type of bean. {quantity} ground ala <span className='summary-options'>{grind}</span> , sent to me <span className='summary-options'>{frequency}</span> ."
                    </p>
                    <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>

                    {isNotMobile ? (
                        <div className="modal-footer">
                            <span className="modal-total">{price}</span>
                            <div className="modal-desktop">
                                <button onClick={onClose} className='modal-primary-button'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='modal-footer'>
                            <div className="modal-mobile">
                                <button onClick={onClose} className='modal-primary-button'>
                                    Checkout - {price}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
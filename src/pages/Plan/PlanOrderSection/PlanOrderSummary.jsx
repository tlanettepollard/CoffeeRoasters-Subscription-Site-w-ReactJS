import React from 'react';

export function PlanOrderSummary({ drink, type, quantity, grind, frequency }) {
    return (
        <div className="order-summary-container">
            <div className="order-summary">
                <span className="order-summary-title">Order Summary</span>
                <p className="order-summary-text">
                    "I drink my coffee <span className='summary-options'>{drink}</span>, with a <span className='summary-options'>{type}</span> type of bean. <span className='summary-options'>{quantity}</span> ground ala <span className='summary-options'>{grind}</span> , sent to me <span className='summary-options'>{frequency}</span>"
                </p>
            </div>
        </div>
    );

};


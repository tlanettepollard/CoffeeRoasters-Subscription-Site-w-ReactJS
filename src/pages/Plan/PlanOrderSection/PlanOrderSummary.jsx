import React from 'react';

export function PlanOrderSummary(props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary">
                <span className="order-summary-title">Order Summary</span>
                {props.disabled ? (
                    <p className="order-summary-text">
                        "I drink my coffee <span className='summary-options'>{props.drink}</span>, with a <span className='summary-options'>{props.type}</span> type of bean. <span className='summary-options'>{props.quantity}</span>, sent to me  <span className='summary-options'>{props.frequency}</span>"
                    </p>
                ) : (
                    <p className="order-summary-text">
                        "I drink my coffee <span className='summary-options'>{props.drink}</span>, with a <span className='summary-options'>{props.type}</span> type of bean. <span className='summary-options'>{props.quantity}</span> ground ala <span className='summary-options'>{props.grind}</span> , sent to me <span className='summary-options'> {props.frequency}</span>"
                    </p>
                )}
            </div>
        </div>
    );

};


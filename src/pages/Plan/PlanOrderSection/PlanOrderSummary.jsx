import React from 'react';

export function PlanOrderSummary({
    drink, type, quantity, grind, frequency, disabled,
}) {
    return (
        <div className="order-summary">
            <span className="order-summary-title">Order Summary</span>
            <p className="order-summary-text">
                'I drink coffee <span className='option-text'>{drink}</span>, with a <span className='option-text'>{type}</span> type of bean. <span className='option-text'>{quantity}</span> ground ala <span className='option-text'>{grind}</span> , sent to me <span className='option-text'>{frequency}</span> .'
            </p>
        </div>



    );
}


{/*
        <>
            <div className="order-summary">
                <span className="order-summary-title">Order Summary</span>

                {disabled ? (
                    <p className='order-summary-text'>
                        “I drink coffee as{" "}
                        <span className='order-selection'>{drink}</span> , with a{" "}
                        <span className='order-selection'>{type}</span> type of bean.{" "}
                        <span className='order-selection'>{quantity}</span>, sent to me
                        <span className='order-selection'>{frequency}</span>."
                    </p>
                ) : (
                    <p className='order-summary-text'>
                        “I drink my coffee as{" "}
                        <span className='order-selection'>{drink}</span> , with a{" "}
                        <span className='order-selection'>{type}</span> type of bean.{" "}
                        <span className='order-selection'>{quantity}</span> ground ala{" "}
                        <span className='order-selection'>{grind}</span>, sent to me{" "}
                        <span className='order-selection'>   {frequency}</span>."
                    </p>
                )}
            </div>
            
        </>
        
        */}
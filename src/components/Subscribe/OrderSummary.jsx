import React from 'react';

export default function OrderSummary({ drink, beanType, qty, grind, frequency }) {
    return (
        <section className='order'>
            <form className='order__wrapper'>
                <div className='order--summary'>
                    <h3 className="order--title">Order Summary</h3>
                    <p className="order--details">
                        'I drink my coffee <span className='order--options'>{drink}</span> with a <span className='order--options'>{beanType}</span> type of bean, <span className='order--options'>{qty}</span> ground ala <span className='order--options'>{grind}</span>, sent to me <span className='order--options'>{frequency}</span>.'
                    </p>
                </div>
                <button type='submit' className='order--btn disabled' title='proceed to checkout form'>Create your plan </button>
            </form>
        </section>
    );
}
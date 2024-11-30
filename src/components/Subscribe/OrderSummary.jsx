import React from 'react';

export function OrderSummary({ drink, type, quantity, grind, frequency }) {
    return (
        <section className='order'>
            <form className='order__wrapper'>
                <div className='order--summary'>
                    <h3 className="order--title"></h3>
                    <p className="order--content"></p>
                </div>
            </form>
        </section>
    );
}
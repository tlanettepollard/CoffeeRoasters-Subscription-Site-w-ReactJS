import React from 'react';
import { SubscribeBanner } from './SubscribeBanner';
import { SubscribeSecOne } from './SubscribeSecOne';

export function Subscribe() {
    return (
        <>
            <div className="subscribe-page">
                <SubscribeBanner />
                <SubscribeSecOne />

                <div className="subscribe-section2">
                    <div className="subscribe-section2-left">
                        <div className="subscribe-menu">
                            <ul>
                                <li>
                                    <span className='li-number'>01</span>
                                    <span className='li-text'>Preferences</span>
                                </li>
                                <li>
                                    <span className='li-number'>02</span>
                                    <span className='li-text'>Bean type</span>
                                </li>
                                <li>
                                    <span className='li-number'>03</span>
                                    <span className='li-text'>Quantity</span>
                                </li>
                                <li>
                                    <span className='li-number'>04</span>
                                    <span className='li-text'>Grind option </span>
                                </li>
                                <li>
                                    <span className='li-number'>05</span>
                                    <span className='li-text'>Deliveries </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="subscribe-section2-right">Render Accordion</div>

                    Order Summary

                    <button>Create my plan!</button>

                    Modal

                </div>
            </div>
        </>
    );
}
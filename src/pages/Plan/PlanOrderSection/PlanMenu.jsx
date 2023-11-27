import React from 'react';
import { MenuChoices } from './planData';

{/* New Menu 

export function PlanMenu() {
    return (
        <div className="plan-menu-left">
            <ul className='plan-menu'>
                {MenuChoices.map((choice) => {
                    return (
                        <div key={choice.id}>
                            <li className='li-selected'>
                                <h4 className="li-selected-title">
                                    <span className="li-selected-number">{choice.number}</span>{choice.title}
                                </h4>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
*/ }


{/* */ }
export function PlanMenu({
    menuPref,
    menuBean,
    menuQuantity,
    menuGrind,
    menuDelivery
}) {
    return (
        <div className="plan-menu-left">
            <div className="plan-menu">
                <ul>
                    <li id='first-menu' className={menuPref ? 'li-selected' : null}>
                        <span className='li-number'>01</span>
                        <span className='li-text'>Preferences</span>
                    </li>
                    <li className={menuBean ? 'li-selected' : null}>
                        <span className='li-number'>02</span>
                        <span className='li-text'>Bean type</span>
                    </li>
                    <li className={menuQuantity ? 'li-selected' : null}>
                        <span className='li-number'>03</span>
                        <span className='li-text'>Quantity</span>
                    </li>
                    <li className={menuGrind ? 'li-selected' : null}>
                        <span className='li-number'>04</span>
                        <span className='li-text'>Grind option </span>
                    </li>
                    <li id="fifth-menu" className={menuDelivery ? 'li-selected' : null}>
                        <span className='li-number'>05</span>
                        <span className='li-text'>Deliveries </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

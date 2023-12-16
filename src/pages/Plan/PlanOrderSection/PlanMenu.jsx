import React from 'react';
import { MenuChoices } from './planData';

export function PlanMenu() {
    return (
        <aside aria-label='aside navigation' className='plan-select-nav'>
            <ul className="plan-nav-list">
                {MenuChoices.map((choice) => {
                    return (
                        <div key={choice.id}>
                            <li className="plan-nav-content">
                                <h4 className="select-title">
                                    <span className="select-number">
                                        {choice.number}
                                    </span>{choice.title}
                                </h4>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </aside>
    );
}
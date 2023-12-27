import React from 'react';
import { MenuChoices } from './planData';

export function PlanMenu() {
    return (
        <aside aria-label='aside navigation' className='planmenu-nav'>
            <ul className="planmenu-nav-list">
                {MenuChoices.map((choice) => {
                    return (
                        <div key={choice.id}>
                            <li className="planmenu-nav-item">
                                <a href={`#${choice.sub}`}>
                                    <h4 className="select-title">
                                        <span className="select-number">
                                            {choice.number}
                                        </span>{choice.title}
                                    </h4>
                                </a>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </aside>
    );
}
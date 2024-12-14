import React from 'react';
import { ChoicesNav } from "../planData";

const AsideNav = () => {
    return (
        <aside className='choice__container'>
            <nav>
                <ul className='nav__list'>
                    {ChoicesNav.map((choice) => {
                        return <li className='nav__item' key={choice.id}>
                            <a href="#preferences">
                                <span className={`nav__item__number span ${choice.id}`}>{choice.number}</span>
                                <span className='nav__item__text'>{choice.title}</span>
                            </a>
                        </li>
                    })}
                </ul>
            </nav>
        </aside>
    );
};
export default AsideNav;
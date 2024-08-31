import { SubscribeNav } from "../planData";

export function AsideNav() {
    return (
        <aside>
            <nav>
                <ul className='nav__list'>
                    {SubscribeNav.map(option => {
                        return <li className='nav__item' key={option.id}>
                            <a href="#preferences">
                                <span className={`nav__item__number span ${option.id}`}>{option.number}</span>
                                <span className='nav__item__text'>{option.title}</span>
                            </a>
                        </li>
                    })}
                </ul>
            </nav>
        </aside>
    );
};
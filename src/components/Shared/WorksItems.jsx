import { Works } from "../planData";

export function WorksItems() {
    return (
        <ul className='works__items'>
            {Works.map(work => {
                return <li className='work__item' key={work.id}>
                    <span className={`work__item__number span ${work.id}`}>{work.number}</span>
                    <h3 className='work__item__title'>{work.title}</h3>
                    <p className='work__item__summary'>{work.summary}</p>

                </li>
            })}
        </ul>

    )
}
import { BenefitCards } from "../planData";

export function HomeBenefits() {
    return (
        <ul className='cards'>
            {BenefitCards.map(card => {
                return <li className='card' key={card.id}>
                    <div className='card__container'>
                        <div className='card__img__container'>
                            <img className='card__img' src={card.imgUrl} alt={card.alt} />
                        </div>
                        <div className='card__info'>
                            <h3 className='card__title'>{card.title}</h3>
                            <p className='card__text'>{card.summary}</p>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    );
}


import { BenefitCards } from "../planData";

export function HomeBenefits() {
    return (
        <section className='benefits'>
            <h2 className='benefits__title'>Why choose us?</h2>
            <p className='benefits__summary'>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level. </p>
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
        </section>
    );
}


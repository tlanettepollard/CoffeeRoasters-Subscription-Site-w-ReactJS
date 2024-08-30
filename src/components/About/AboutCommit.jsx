import { Commitment } from "../planData";

export function AboutCommitment() {
    return (
        <section className='commit'>
            <ul className='commit__list'>
                {Commitment.map(commitItem => {
                    return <li key={commitItem.id} className='commit__list__item'>
                        <div className='commit__image__container'>
                            <picture className='commit__picture'>
                                <source media='(min-width: 1200px)' srcSet={commitItem.imgUrl.desktop} />
                                <source media='(min-width: 768px)' srcSet={commitItem.imgUrl.tablet} />
                                <source media='(max-width: 767px)' srcSet={commitItem.imgUrl.mobile} />
                            </picture>
                            <img className='commit__img' src={commitItem.imgUrl.mobile} srcSet={commitItem.imgUrl.mobile} alt={commitItem.alt} />
                        </div>

                        <div className='commit__details'>
                            <h2 className='commit__details__title'>{commitItem.title}</h2>
                            <p className='commit__details__summary'>{commitItem.summary}</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    );
}
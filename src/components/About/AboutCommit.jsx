import { Commitment } from "../planData";

export function AboutCommitment() {
    return (
        <section className='commit'>
            <ul className='commit__list'>
                {Commitment.map(commitItem => {
                    return <li key={commitItem.id} className='commit__list__item'>
                        <div className='commit__image__container'>
                            <picture>
                                <source media='(min-width: 1200px)' srcSet={commitItem.imgUrl.desktop} width='445' height='520' />
                                <source media='(min-width: 768px)' srcSet={commitItem.imgUrl.tablet} width='286' height='400' />
                                <source media='(max-width: 767px)' srcSet={commitItem.imgUrl.mobile} width='327' height='400' />
                                <img className='commit__img' src={commitItem.imgUrl.mobile} alt={commitItem.alt} />
                            </picture>
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
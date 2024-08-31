import { Quality } from "../planData";

export function AboutQuality() {
    return (
        <section className='quality'>
            <ul className='quality__list container'>
                {Quality.map(qualityItem => {
                    return <li key={qualityItem.id} className='quality__list__item'>
                        <div className='quality__image__container'>
                            <picture className='quality__picture'>
                                <source media='(min-width: 1200px)' srcSet={qualityItem.imgUrl.desktop} width='445' height='493' />
                                <source media='(min-width: 768px)' srcSet={qualityItem.imgUrl.tablet} width='565' height='320' />
                                <source media='(max-width: 767px)' srcSet={qualityItem.imgUrl.mobile} width='279' height='156' />
                                <img className='quality__img' src={qualityItem.imgUrl.mobile} alt={qualityItem.alt} />
                            </picture>

                        </div>
                        <div className='quality__details'>
                            <h2 className='quality__details__title'>{qualityItem.title}</h2>
                            <p className='quality__details__summary'>{qualityItem.summary}</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    );
}


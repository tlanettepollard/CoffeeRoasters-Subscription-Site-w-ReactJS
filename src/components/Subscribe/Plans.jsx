import { AsideNav } from "./AsideNav";
import { Accordion } from "./Accordion";

export function Plans() {
    return (
        <section className='plan__container'>
            <div className="plan__section">
                <AsideNav />
                <Accordion />
            </div>
        </section>
    )
}
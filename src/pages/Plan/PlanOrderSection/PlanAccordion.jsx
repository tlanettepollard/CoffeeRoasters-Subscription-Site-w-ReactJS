import { useState } from 'react';
import { PlanOptionForm } from './PlanOptionForm';


export function PlanAccordion({ option, defaultChecked }) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={defaultChecked === "" ? 'accordion-item' : isActive ? 'accordion-item' : 'hidden'}>
            <div className="accordion-header" onClick={toggleActive}>
                <p className="accordion-header-title">{option.title}</p>
                <img src="/public/assets/plan/desktop/icon-arrow.svg" alt="" />
            </div>
            <div className="accordion-panel">
                <PlanOptionForm />
            </div>
        </div>
    );
}
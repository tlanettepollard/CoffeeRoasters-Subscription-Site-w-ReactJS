import { useState, useEffect } from 'react';
import { PlanQuestions } from './PlanOrderSection/planData.js';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
//import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';



export function Plan() {
    const [options] = useState(PlanQuestions);
    const [drink, setDrink] = useState('____');
    const [type, setType] = useState('____');
    const [quantity, setQuantity] = useState('____');
    const [grind, setGrind] = useState('____');
    const [frequency, setFrequency] = useState('____');
    const [price, setPrice] = useState(0);

    // Modal 
    const [modalOpen, setModalOpen] = useState(false);
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 768);

    // Grind Option
    const [isGrindDisabled, setIsGrindDisabled] = useState(false);




    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />
                <PlanAccordion option={options[0]} />



            </div>
        </>
    );
}
import { useState, useEffect } from 'react';
import { PlanQuestions } from './PlanOrderSection/planData.js';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';
import { PlanOrderSummary } from './PlanOrderSection/PlanOrderSummary.jsx';
import { PlanCheckoutModal } from './PlanOrderSection/PlanCheckoutModal.jsx';
//import { FiChevronDown, FiChevronUp } from 'react-icons/fi';



export function Plan() {

    const [options] = useState(PlanQuestions);
    const [drink, setDrink] = useState('____');
    const [type, setType] = useState('____');
    const [quantity, setQuantity] = useState('____');
    const [grind, setGrind] = useState('____');
    const [frequency, setFrequency] = useState('____');
    //const [payment, setPayment] = useState(0);


    // Calculate total shipping
    const shippingCost = () => {
        switch (quantity) {
            case '250g':
                return frequency === 'Every week' ? 7.20 * 4 : frequency === 'Every 2 weeks' ? 9.60 * 2 : 12.00;
                break;
            case '500g':
                return frequency === 'Every week' ? 13.00 * 4 : frequency === 'Every 2 weeks' ? 17.50 * 2 : 22.00;
                break;
            case '1000g':
                return frequency === 'Every week' ? 22.00 * 4 : frequency === 'Every 2 weeks' ? 32.00 * 2 : 42.00;
                break;
            default:
                return shippingCost;
        }
    }


    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />
            </div>
            <div className="selection-container">
                <PlanMenu />
                <PlanAccordion option={options[0]} changeWord={(word) => setDrink(word)} />
                <PlanAccordion option={options[1]} changeWord={(word) => setType(word)} />
                <PlanAccordion option={options[2]} changeWord={(word) => setQuantity(word)} />
                <PlanAccordion option={options[3]} changeWord={(word) => setGrind(word)} />
                <PlanAccordion option={options[4]} changeWord={(word) => setFrequency(word)} />
            </div>

            <div className="summary-container">
                <PlanOrderSummary drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} />
            </div>
            <div className="checkout-container">
                <PlanCheckoutModal drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} shipping={shippingCost()} />
            </div>
        </>
    );
}
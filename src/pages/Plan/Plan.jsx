import { useState, useEffect } from 'react';
import { PlanQuestions } from './PlanOrderSection/planData.js';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';
import { PlanOrderSummary } from './PlanOrderSection/PlanOrderSummary.jsx';
import { PlanCheckoutModal } from './PlanOrderSection/PlanCheckoutModal.jsx';



export function Plan() {
    const [options] = useState(PlanQuestions);
    const [drink, setDrink] = useState('____');
    const [type, setType] = useState('____');
    const [quantity, setQuantity] = useState('____');
    const [grind, setGrind] = useState('____');
    const [frequency, setFrequency] = useState('____');
    const [price, setPrice] = useState(0);


    // Grind Option
    const [isGrindDisabled, setIsGrindDisabled] = useState(false);
    useEffect(() => {
        if (drink === 'Capsule') {
            setIsGrindDisabled(true);
        } else {
            setIsGrindDisabled(false);
        }
    }, [drink]);

    // Modal 
    const [showModal, setShowModal] = useState(false);

    const showPrice = () => {
        setShowModal(true);
        switch (quantity) {
            case '250g':
                return frequency === 'Every Week' ? setPrice('$28.20/mo') : frequency === 'Every 2 Weeks' ? setPrice('$19.20/mo') : setPrice('$12.00/mo');
                break;
            case '500g':
                return frequency === 'Every Week' ? setPrice('$52.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('$35.00/mo') : setPrice('$22.00/mo');
                break;
            case '1000g':
                return frequency === 'Every Week' ? setPrice('$88.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('$64.00/mo') : setPrice('$42.00/mo');
                break;
            default:
                return price;
        }
    }





    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />
                <div className='selection-container'>
                    <PlanMenu />
                    <PlanAccordion option={options[0]} changeWord={(word) => setDrink(word)} />
                    <PlanAccordion option={options[1]} changeWord={(word) => setType(word)} />
                    <PlanAccordion option={options[2]} changeWord={(word) => setQuantity(word)} />
                    <PlanAccordion option={options[3]} changeWord={(word) => setGrind(word)} />
                    <PlanAccordion option={options[4]} changeWord={(word) => setFrequency(word)} />
                </div>
                <PlanOrderSummary drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} />
                <div className="button-container">
                    <button onClick={() => showPrice()} className='order-primary-button'>
                        Create a plan
                    </button>
                    <PlanCheckoutModal drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} open={showModal} onClose={() => setShowModal(false)} />
                </div>

            </div>
        </>
    );
}
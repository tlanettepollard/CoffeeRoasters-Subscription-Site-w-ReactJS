import { useState, useEffect } from 'react';
import { PlanQuestions } from './PlanOrderSection/planData.js';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';
import { PlanOrderSummary } from './PlanOrderSection/PlanOrderSummary.jsx';
import { PlanCheckoutModal } from './PlanOrderSection/PlanCheckoutModal.jsx';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';



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

    // Active and Disabled Buttons
    const disabledButton = drink !== "____" && type !== "____" && quantity !== "____" && frequency !== "____" ? false : true;

    const activeButton = drink !== "____" && type !== "____" && quantity !== "____" && grind !== "____" && frequency !== "____" ? false : true;




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
                    {isGrindDisabled ? (
                        <button className='option-button'>
                            <h2 id={options.name} className='option-title' style={{ color: '#83888F', opacity: .05 }}>
                                Want us to grind them?
                            </h2>

                        </button>
                    ) : (
                        <PlanAccordion option={options[3]} changeWord={(word) => setGrind(word)} />
                    )}

                    <PlanAccordion option={options[4]} changeWord={(word) => setFrequency(word)} />
                </div>

                <div className='summary-container'>
                    <PlanOrderSummary drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} disabled={isGrindDisabled} />
                    <div className="button-container">
                        {isGrindDisabled ? (
                            <button disabled={disabledButton} onClick={() => showPrice()} className='activated-order-btn disabled'>
                                Create a plan
                            </button>
                        ) : (
                            <button disabled={activeButton} onClick={() => showPrice()} className='activated-order-btn disabled'>
                                Create a plan
                            </button>
                        )}
                    </div>
                </div>

                <div className='modal-container'>
                    <PlanCheckoutModal drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} open={showModal} onClose={() => setShowModal(false)} />
                </div>

            </div>
        </>
    );
}
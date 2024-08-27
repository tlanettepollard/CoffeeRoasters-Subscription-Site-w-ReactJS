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

    const [isGrindDisabled, setIsGrindDisabled] = useState(false);
    const [defaultChecked, setDefaultChecked] = useState("Capsule");

    //const [payment, setPayment] = useState(0);

    // Modal State
    //const [modalOpen, setModalOpen] = useState(false);

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

    // Default Checked
    useEffect(() => {
        setDefaultChecked("");
    }, []);

    useEffect(() => {
        if (drink === "Capsule") {
            setIsGrindDisabled(true);
        } else {
            setIsGrindDisabled(false);
        }
    }, [drink]);


    // Buttons
    const buttonDisabled = drink !== "____" && type !== "____" && quantity !== "____" && frequency !== "____" ? false : true;

    const buttonActive = drink !== "____" && type !== "____" && quantity !== "____" && grind !== "____" && frequency !== "____" ? false : true;


    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />
            </div>
            <div className="selection-container">
                <PlanMenu />
                <PlanAccordion className='bg' defaultChecked={defaultChecked} option={options[0]} changeWord={(word) => setDrink(word)} />
                <PlanAccordion option={options[1]} changeWord={(word) => setType(word)} />
                <PlanAccordion option={options[2]} changeWord={(word) => setQuantity(word)} />
                {isGrindDisabled ? (
                    <div className='option-button'>
                        <h2 style={{ color: "#83888f", opacity: 0.5 }}>
                            Want us to grind them?
                        </h2>
                    </div>
                ) : (
                    <PlanAccordion option={options[3]} changeWord={(word) => setGrind(word)} />
                )}

                <PlanAccordion option={options[4]} changeWord={(word) => setFrequency(word)} />
            </div>

            <div className="summary-container">
                <PlanOrderSummary drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} disabled={isGrindDisabled} />
            </div>

            {isGrindDisabled ? (
                <button disabled={buttonDisabled} className="button-primary-activated" onClick={show}>
                    Create my plan!
                </button>
            ) : (
                <button disabled={buttonActive} className='button-primary-activated' onClick={show}>
                    Create my plan!
                </button>
            )}



            <div className="checkout-container">
                <PlanCheckoutModal drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} shipping={shippingCost()} />
            </div>
        </>
    );
}
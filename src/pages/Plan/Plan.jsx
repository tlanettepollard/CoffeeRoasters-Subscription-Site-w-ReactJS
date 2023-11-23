import { useState, useEffect } from 'react';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanOrderSummary } from './PlanOrderSection/PlanOrderSummary.jsx';
import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';
import { OPTIONS } from './PlanOrderSection/planData.js';

export function Plan() {
    const [options] = useState(OPTIONS);

    {/* For Modal */ }
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 576);

    {/* For Menu Options */ }
    const [menuDrink, setMenuDrink] = useState(true);
    const [menuType, setMenuType] = useState(false);
    const [menuQuantity, setMenuQuantity] = useState(false);
    const [menuGrind, setMenuGrind] = useState(false);
    const [menuDeliver, setMenuDeliver] = useState(false);


    const [drink, setDrink] = useState("Capsule");
    const [type, setType] = useState("____");
    const [quantity, setQuantity] = useState("____");
    const [grind, setGrind] = useState("____");
    const [frequency, setFrequency] = useState("____");

    const [price, setPrice] = useState("");
    const [showOrderModal, setShowOrderModal] = useState(false);

    const [isGrindDisabled, setIsGrindDisabled] = useState(false);

    const [defaultChecked, setDefaultChecked] = useState("Capsule");

    {/* Setting Default Coffee */ }
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

    {/* For Modal */ }

    const closeOrderModal = () => {
        setShowOrderModal(false);
    };

    const display = () => {
        setShowOrderModal(true);
        switch (frequency) {
            case ' Every Week':
                setPrice('14.00/mo');
                break;
            case ' Every 2 Weeks':
                setPrice('$17.25/mo');
                break;
            case ' Every Month':
                setPrice('$22.50/mo');
                break;
            default:
                return price;
        }
    };



    {/* Active and Disabled Buttons */ }
    const disabledButton = drink !== "____" && type !== "____" && quantity !== "____" && frequency !== "____" ? false : true;

    const activeButton = drink !== "____" && type !== "____" && quantity !== "____" && grind !== "____" && frequency !== "____" ? false : true;



    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />

                <div className="plan-page-options">

                    {/* Plan Menu appears on Desktop */}
                    <div className="plan-menu-left">
                        <div className="plan-menu">
                            <ul>
                                <li>
                                    <span className='li-number'>01</span>
                                    <span className='li-text'>Preferences</span>
                                </li>
                                <li>
                                    <span className='li-number'>02</span>
                                    <span className='li-text'>Bean type</span>
                                </li>
                                <li>
                                    <span className='li-number'>03</span>
                                    <span className='li-text'>Quantity</span>
                                </li>
                                <li>
                                    <span className='li-number'>04</span>
                                    <span className='li-text'>Grind option </span>
                                </li>
                                <li>
                                    <span className='li-number'>05</span>
                                    <span className='li-text'>Deliveries </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Options Accordion */}
                    <div className="plan-options-right">
                        <PlanAccordion
                            defaultChecked={defaultChecked}
                            option={options[0]}
                            changeWord={(word) => setDrink(word)}
                            setMenuActive={(item) => setMenuDrink(true)}
                        />
                        <PlanAccordion
                            option={options[1]}
                            changeWord={(word) => setType(word)}
                            setMenuActive={(item) => setMenuType(true)}
                        />
                        <PlanAccordion
                            option={options[2]}
                            changeWord={(word) => setQuantity(word)}
                            setMenuActive={(item) => setMenuQuantity(true)}
                        />
                        {isGrindDisabled ? (
                            <div className="accordion-header">
                                <h1 style={{ color: '#83888F', opacity: 0.5, }}>Want us to grind them?</h1>
                                <img src="/public/assets/plan/desktop/icon-arrow.svg" style={{ transform: `rotate(0)` }} alt="" />
                            </div>
                        ) : (
                            <PlanAccordion
                                option={options[3]}
                                changeWord={(word) => setGrind(word)}
                                setMenuActive={(item) => setMenuGrind(true)}
                            />
                        )}

                        <PlanAccordion
                            option={options[4]}
                            changeWord={(word) => setFrequency(word)}
                            setMenuActive={(item) => setMenuDeliver(true)}
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary-wrapper">
                        <PlanOrderSummary
                            drink={drink}
                            type={type}
                            quantity={quantity}
                            grind={grind}
                            frequency={frequency}
                            disabled={isGrindDisabled}
                        />

                        {isGrindDisabled ? (
                            <button disabled={disabledButton} className='activated-primary-btn'>Create my plan!</button>
                        ) : (
                            <button disabled={activeButton} className='activated-primary-btn'>Create my plan!</button>
                        )}
                    </div>

                    {/* Order Modal */}


                </div>
            </div>
        </>
    );
}
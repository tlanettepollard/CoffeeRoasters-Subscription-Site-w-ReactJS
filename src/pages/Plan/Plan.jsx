import { useState, useEffect } from 'react';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanOrderSummary } from './PlanOrderSection/PlanOrderSummary.jsx';
import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
import { PlanAccordionItem } from './PlanOrderSection/PlanAccordionItem.jsx';
import { Questions } from './PlanOrderSection/planData.js';

export function Plan() {
    const [option] = useState(Questions);

    {/* For Modal */ }
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 576);

    {/* For Menu Options */ }
    const [menuPref, setMenuPref] = useState(true);
    const [menuBean, setMenuBean] = useState(false);
    const [menuQuantity, setMenuQuantity] = useState(false);
    const [menuGrind, setMenuGrind] = useState(false);
    const [menuDelivery, setMenuDelivery] = useState(false);


    const [drink, setDrink] = useState("Capsule");
    const [type, setType] = useState("____");
    const [quantity, setQuantity] = useState("____");
    const [grind, setGrind] = useState("____");
    const [frequency, setFrequency] = useState(" ____");


    const [price, setPrice] = useState(0);
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
    {/*
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
    */}

    {/* New Modal */ }

    const displayPrice = () => {
        setShowOrderModal(true);
        switch (quantity) {
            case '250g':
                return frequency === 'Every Week' ? setPrice('$28.20/mo') : frequency === 'Every 2 Weeks' ? setPrice('19.20/mo') : setPrice('12.00/mo');
                break;
            case '500g':
                return frequency === 'Every Week' ? setPrice('$52.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('35.00/mo') : setPrice('22.00/mo');
                break;
            case '1000g':
                return frequency === 'Every Week' ? setPrice('$88.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('64.00/mo') : setPrice('42.00/mo');
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

                {/* Plan Menu */}
                <div className="plan-page-options">
                    <PlanMenu
                        menuPref={menuPref}
                        menuBean={menuBean}
                        menuGrind={menuGrind}
                        menuQuantity={menuQuantity}
                        menuDelivery={menuDelivery}
                    />

                    {/* Plan Accordion */}
                    <div className="plan-options-right">
                        <PlanAccordionItem
                            defaultChecked={defaultChecked}
                            option={option[0]}
                            changeWord={(word) => setDrink(word)}
                            setMenuActive={(item) => setMenuPref(true)}
                        />
                        <PlanAccordionItem
                            option={option[1]}
                            changeWord={(word) => setType(word)}
                            setMenuActive={(item) => setMenuBean(true)}
                        />
                        <PlanAccordionItem
                            option={option[2]}
                            changeWord={(word) => setQuantity(word)}
                            setMenuActive={(item) => setMenuQuantity(true)}
                        />

                        {isGrindDisabled ? (
                            <div className='accordion-header'>
                                <p className='accordion-header-title' style={{ color: '#83888F', opacity: 0.5 }}>
                                    Want us to grind them?
                                </p>
                                <img src="/public/assets/plan/desktop/icon-arrow.svg" alt="" />
                            </div>
                        ) : (

                            <PlanAccordionItem
                                option={option[3]}
                                changeWord={(word) => setGrind(word)}
                                setMenuActive={(item) => setMenuGrind(true)}
                            />
                        )}

                        <PlanAccordionItem
                            option={option[4]}
                            changeWord={(word) => setFrequency(word)}
                            setMenuActive={(item) => setMenuDelivery(true)}
                        />
                    </div>

                    {/* Plan Menu appears on Desktop 
                    <PlanMenu
                        menuPref={menuPref}
                        menuBean={menuBean}
                        menuGrind={menuGrind}
                        menuQuantity={menuQuantity}
                        menuDelivery={menuDelivery}
                    />
                    */}
                    {/* Options Accordion 

                    <div className="plan-options-right">
                        <PlanAccordion
                            defaultChecked={defaultChecked}
                            option={questions[0]}
                            changeWord={(word) => setDrink(word)}
                            setMenuActive={(item) => setMenuPref(true)}
                        />
                        <PlanAccordion
                            option={questions[1]}
                            changeWord={(word) => setType(word)}
                            setMenuActive={(item) => setMenuBean(true)}
                        />
                        <PlanAccordion
                            option={questions[2]}
                            changeWord={(word) => setQuantity(word)}
                            setMenuActive={(item) => setMenuQuantity(true)}
                        />
                        {isGrindDisabled ? (
                            <div className='accordion-header'>
                                <p className='accordion-header-title' style={{ color: '#83888F', opacity: 0.5 }}>
                                    Want us to grind them?
                                </p>
                                <img src="/public/assets/plan/desktop/icon-arrow.svg" alt="" />
                            </div>
                        ) : (
                            <PlanAccordion
                                option={questions[3]}
                                changeWord={(word) => setGrind(word)}
                                setMenuActive={(item) => setMenuGrind(true)}
                            />
                        )}

                        <PlanAccordion
                            option={questions[4]}
                            changeWord={(word) => setFrequency(word)}
                            setMenuActive={(item) => setMenuDelivery(true)}
                        />

                    </div>
                    */}

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

                        {/* */}
                        {isGrindDisabled ? (
                            <button disabled={disabledButton} className='activated-primary-btn' onClick={displayPrice}>Create my plan!</button>
                        ) : (
                            <button onClick={displayPrice} disabled={activeButton} className='activated-primary-btn'>Create my plan!</button>
                        )}

                    </div>

                    {/* Order Modal */}


                </div>
            </div >
        </>
    );
}
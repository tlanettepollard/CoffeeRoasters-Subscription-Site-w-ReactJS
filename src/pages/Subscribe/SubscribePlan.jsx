import { useState, useEffect } from 'react';
import { SubscribeBanner } from './SubscribeBanner';
import { SubscribeSecOne } from './SubscribeSecOne';
import { SubOrderSummary } from './SubscribeSecTwo/SubOrderSummary';
//import { OPTIONS } from './SubscribeSecTwo/planData.js';
export function SubscribePlan() {

    const [drink, setDrink] = useState("Capsule");
    const [type, setType] = useState("____");
    const [quantity, setQuantity] = useState("____");
    const [grind, setGrind] = useState("____");
    const [frequency, setFrequency] = useState("____");

    const [price, setPrice] = useState("");
    const [showOrderModal, setShowOrderModal] = useState(false);

    const [isGrindDisabled, setIsGrindDisabled] = useState(false);

    const [defaultSelected, setDefaultSelected] = useState("Capsule");

    {/* Setting Default Coffee */ }
    useEffect(() => {
        setDefaultSelected("");
    }, []);

    useEffect(() => {
        if (drink === "Capsule") {
            setIsGrindDisabled(true);
        } else {
            setIsGrindDisabled(false);
        }
    }, [drink]);

    const closeOrderModal = () => {
        setShowOrderModal(false);
    };

    {/* Modal */ }



    {/* Active and Disabled Buttons */ }
    const disabledButton = drink !== "____" && type !== "____" && quantity !== "____" && frequency !== "____" ? false : true;

    const activeButton = drink !== "____" && type !== "____" && quantity !== "____" && grind !== "____" && frequency !== "____" ? false : true;

    return (
        <>
            <div className="subscribe-page">
                <SubscribeBanner />
                <SubscribeSecOne />

                <div className="subscribe-section2">

                    {/* Subscribe Menu appears on Desktop */}
                    <div className="subscribe-section2-left">
                        <div className="subscribe-menu">
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
                    <div className="subscribe-section2-right">Render Accordion</div>

                    <div className="order-summary-wrapper">
                        <SubOrderSummary
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
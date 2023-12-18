import { useState, useEffect } from 'react';
import { PlanChoices } from './planData';
import { PlanMenu } from './PlanMenu';
import { PlanOrderSummary } from './PlanOrderSummary';
import { PlanCheckoutModal } from './PlanCheckoutModal';


export function PlanAccordion() {
    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        deliveries: null,
    }
    const [isActive, setIsActive] = useState(false);
    const [radioBtn, setRadioBtn] = useState(initialState);

    // Disable selectionBtn if selection not made
    useEffect(() => {
        const checkoutBtn = document.querySelector('.modal-checkout-btn');
        if (radioBtn.preference !== null && radioBtn.bean !== null && radioBtn.quantity !== null && radioBtn.deliveries !== null) {
            checkoutBtn.classList.remove('disabled')
        } else {
            checkoutBtn.classList.add('disabled')
        }
    }, [radioBtn])


    //Order Selections
    const preferred = radioBtn.preference === null ? "____" : radioBtn.preference;
    const beanChoice = radioBtn.bean === null ? "____" : radioBtn.bean;
    const qty = radioBtn.quantity === null ? "____" : radioBtn.quantity;
    const grind = radioBtn.grind === null ? "____" : radioBtn.grind;
    const deliver = radioBtn.deliveries === 'weekly' ? "Every week" : radioBtn.deliveries === 'fortnight' ? 'Every 2 weeks' : radioBtn.deliveries === 'monthly' ? 'Monthly' : "____";


    // Shipping Costs per month per weight
    const shippingCost = () => {
        let payment;
        switch (qty) {
            case '250g':
                return radioBtn.deliveries === 'weekly' ? 7.2 * 4 : radioBtn.deliveries === 'fortnight' ? 9.60 * 2 : 12.00;
                break;
            case '500g':
                return radioBtn.deliveries === 'weekly' ? 13 * 4 : radioBtn.deliveries === 'fortnight' ? 17.50 * 2 : 22.00;
                break;
            case '1000g':
                return radioBtn.deliveries === 'weekly' ? 22 * 4 : radioBtn.deliveries === 'fortnight' ? 32 * 2 : 42.00;
                break;
            default:
                return payment;
        }
    }




    return (

        <section className="plan-container">
            <PlanMenu />

            {/* Accordion */}
            <div className="accordion-container">
                <ul className="accordion">

                </ul>

                <PlanOrderSummary />
                <PlanCheckoutModal />
            </div>
        </section>

    );


}
import { useEffect, useState } from 'react';
import { PlanChoices } from './planData';
import { PlanCheckoutModal } from './PlanCheckoutModal';


export function PlanAccordion() {
    // Setting default
    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        deliveries: null,
    }

    const [isActive, setIsActive] = useState(false);
    const [radioBtn, setRadioBtn] = useState(initialState);
    const [verb, setVerb] = useState('as');

    useEffect(() => {
        // disable selectionBtn if not selection is made
        const selectionBtn = document.querySelector('.selection-btn');
        if (radioBtn.preference !== null && radioBtn.bean !== null && radioBtn.quantity !== null && radioBtn.deliveries !== null) {
            selectionBtn.classList.remove('disabled')
        } else {
            selectionBtn.classList.add('disabled')
        }
    }, [radioBtn])


    // Order selections
    const preferred = radioBtn.preference === null ? " ____" : radioBtn.preference
    const beanSelection = radioBtn.bean === null ? "____" : radioBtn.bean
    const qty = radioBtn.quantity === null ? "____" : radioBtn.quantity
    const grind = radioBtn.grind === null ? "____" : radioBtn.grind
    const deliver = radioBtn.deliveries === "weekly" ? "Every week" : radioBtn.deliveries === 'fortnight' ? 'Every 2 weeks' : radioBtn.deliveries === 'monthly' ? 'Monthly' : "____"


    // Calculate total shipping per month per weight
    const shippingCost = () => {
        switch (quantity) {
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

    // Toggle for Accordion



    // Radio Buttons for Order Selection

    

    return (
        <div className="accordion-container">

        </div>
    );
}
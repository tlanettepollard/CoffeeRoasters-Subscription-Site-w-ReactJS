import { useState, useEffect } from 'react';
import { PlanChoices } from './planData';
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

}
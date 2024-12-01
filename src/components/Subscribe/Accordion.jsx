import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import { Modal } from '../Subscribe/Modal';
import { OrderSummary } from '../Subscribe/OrderSummary';

export function Accordion() {
    const initialState = {
        preference: null,
        type: null,
        quantity: null,
        grind: null,
        frequency: null,
    }

    const [show, setShow] = useState(false);
    const [radioData, setRadioData] = useState(initialState);

    useEffect(() => {
        // console.log("radio data changes")
        // disable orderBtn if no selection has been made
        const orderBtn = document.querySelector('.order-btn')
        if (radioData.preference !== null && radioData.type !== null && radioData.quantity !== null && radioData.frequency !== null) {
            orderBtn.classList.remove('disabled')
        } else {
            orderBtn.classList.add('disabled')
        }
    }, [radioData])


    const drink = radioData.preference === null ? "____" : radioData.preference
    const bean = radioData.type === null ? "____" : radioData.type
    const qty = radioData.quantity === null ? "____" : radioData.quantity
    const grind = radioData.grind === null ? "____" : radioData.grind
    const delivery = radioData.frequency === "weekly" ? "Every week" : radioData.frequency === "fortnight" ? "Every 2 weeks" : radioData.frequency === "monthly" ? "Monthly" : "____"


    // Calculate total shipping costs
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
    //Accordion Toggle: click question to reveal answers





    return (
        <section className="accordion__wrapper">
            <ul className="accordion"></ul>
        </section>
    );
}




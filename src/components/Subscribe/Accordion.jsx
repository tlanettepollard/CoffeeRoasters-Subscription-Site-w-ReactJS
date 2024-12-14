import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import Modal from '../Subscribe/Modal';
import OrderSummary from '../Subscribe/OrderSummary';

const Accordion = () => {
    // Set the initial buttons as null
    const initialState = {
        drink: null,
        bean: null,
        quantity: null,
        grind: null,
        frequency: null,
    }

    const [show, setShow] = useState(false);
    [radioData, setRadioData] = useState(initialState);
    const [verb, setVerb] = useState('as');



    useEffect(() => {
        // will disable orderBtn if no selection made
        const orderBtn = document.querySelector('.order--btn')
        if (radioData.drink !== null && radioData.bean !== null && radioData.quantity !== null && radioData.frequency !== null) {
            orderBtn.classList.remove('disabled')
        } else {
            orderBtn.classList.add('disabled')
        }
    }, [radioData])

    const preferDrink = radioData.drink === null ? '____' : radioData.drink
    const beanChoice = radioData.bean === null ? '____' : radioData.bean
    const qty = radioData.quantity === null ? '____' : radioData.quantity
    const grind = radioData.grind === null ? '____' : radioData.grind
    const delivery = radioData.frequency === 'Weekly' ? 'Every week' : radioData.frequency === 'Fortnight' ? 'Every 2 weeks' : radioData.frequency === 'Monthly' ? 'Every month' : '____'

    // Calculate total shipping cost per month per weight

    const shippingCost = () => {
        switch (qty) {
            case '250g':
                return delivery === 'Every week' ? 7.20 * 4 : delivery === 'Every 2 weeks' ? 9.60 * 2 : 12.00;
                break;
            case '500g':
                return delivery === 'Every week' ? 13 * 4 : delivery === 'Every 2 weeks' ? 17.50 * 2 : 22.00;
                break;
            case '1000g':
                return 'Every week' ? 22.00 * 4 : delivery === 'Every 2 weeks' ? 32.00 * 2 : 42.00;
                break;
            default:
                return shippingCost;
        }
    }



};

export default Accordion;

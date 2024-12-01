import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import Modal from '../Subscribe/Modal';
import OrderSummary from '../Subscribe/OrderSummary';

export function Accordion() {

    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        delivery: null,
    }

    const [show, setShow] = useState(false);
    const [radioData, setRadioData] = useState(initialState);
    
    useEffect(() => {
        //disable orderBtn if no selection has been made
        const orderBtn = document.querySelector('.order--btn')
    })

}
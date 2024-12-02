import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import Modal from '../Subscribe/Modal';
import OrderSummary from '../Subscribe/OrderSummary';

export default function Accordion() {

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
        //console.log('radio data changes')
        //disable orderBtn if no selection has been made
        const orderBtn = document.querySelector('.order--btn')
        if (radioData.preference !== null && radioData.bean !== null && radioData.quantity !== null && radioData.delivery !== null) {
            orderBtn.classList.remove('disabled')
        } else {
            orderBtn.classList.add('disabled')
        }
    }, [radioData])

    const drink = radioData.preference === null ? '____' : radioData.preference
    const beanType = radioData.bean === null ? '____' : radioData.bean
    const qty = radioData.quantity === null ? '____' : radioData.quantity
    const grind = radioData.grind === null ? '____' : radioData.grind
    const frequency = radioData.delivery === 'weekly' ? 'Every week' : radioData.delivery === 'fortnight' ? 'Every 2 weeks' : radioData.delivery === 'monthly' ? 'Monthly' : '____'

    // calculate total shipping cost per month per weight
    const shippingCost = () => {
        switch (quantity) {

        }
    }
// Left off adding Switch statement for shipping

    return (
        <div className="order">
            <OrderSummary />
            <Modal />
        </div>

    )






}
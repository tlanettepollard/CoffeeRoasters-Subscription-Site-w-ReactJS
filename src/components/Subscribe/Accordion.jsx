import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import Modal from '../Subscribe/Modal';
import OrderSummary from '../Subscribe/OrderSummary';

export default function Accordion() {
    // Set the initial buttons as null

    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        delivery: null,
    }

    const [show, setShow] = useState(false); //Setting the state for the modal
    const [radioData, setRadioData] = useState(initialState); // Setting the state for the radio buttons on the selection section

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

    
    // Set variables to represent data for radio button selections
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

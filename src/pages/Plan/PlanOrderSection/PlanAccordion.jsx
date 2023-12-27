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
    const [verb, setVerb] = useState('as');


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

    // Submitting Order Form - Opens Modal
    const handleSubmit = (event) => {
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.subscribe-modal');
        overlay.classList.remove('hide__overlay');
        modal.classList.toggle('subscribe__show');
        event.preventDefault();
    }

    // Submitting Checkout Form -- Checkout Modal
    const handleSubscribe = (event) => {
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.subscribe-modal');
        modal.classList.toggle('subscribe__show');
        overlay.classList.add('hide__overlay');

        event.preventDefault();
    }


    // Toggle for Accordion
    const handleShow = (event) => {
        setIsActive(!isActive);
        const btn = event.target;
        const parent = btn.parentElement;
        const attribute = btn.getAttribute('data-target');
        console.log(attribute);
        const targetDiv = parent.nextSibling;
        console.log(targetDiv);
        btn.classList.toggle('collapsed')
        targetDiv.classList.toggle(attribute)
        targetDiv.classList.toggle('collapse__show')
    }


    // Radio Buttons for Order Selection
    const onChange = (event) => {
        const { name, id } = event.target
        setRadioBtn({ ...radioBtn, [name]: id })

        console.log(name)
        console.log(id)
        console.log(radioBtn)

        const selectedChoice = Array.from(document.querySelectorAll("input[name='preference']"))
        const grind = document.getElementById('accordionBtn04')
        const grind__child = document.querySelector('collapse04')
        const show__grind = document.querySelector('.show__grind')
        const orderBtn = document.querySelector('.order-btn')

        const prefer = selectedChoice.filter(choice => choice.checked && choice.id === 'capsule')
        console.log(prefer)

        if (prefer.length > 0) {
            grind.classList.add('grind-disable')
            grind__child.classList.add('collapse04')
            show__grind.classList.add('hide-grind')
            setVerb('using')
        } else {
            grind.classList.remove('grind-disable')
            grind__child.classList.remove('collapse04')
            show__grind.classList.remove('hide-grind')
            setVerb('as')
            if (radioBtn.grinds !== null) {
                orderBtn.classList.remove('disabled')
            } else {
                orderBtn.classList.add('disabled')
            }
        }
    }




    return (

        <section className="plan-container">
            <PlanMenu />

            {/* Accordion */}
            <div className="accordion-container">
                <ul className="accordion">
                    {PlanChoices.map(plan => {
                        return <li className='accordion-list-item' key={plan.id}>
                            <div id={plan.name} className='accordion-item'>
                                <h3 className="accordion-header">
                                    <button aria-expanded={plan.id === '01' ? true : false} aria-controls={`collapse$(plan.id)`} id={`accordionBtn${plan.id}`} className={'accordion-btn'} onClick={handleShow} data-toggle='collapse' data-target={`collapse${plan.id}`}>{plan.question}</button>
                                </h3>
                                <div id={`collapse${plan.id}`} className={`plan-card collapse${plan.id}`} role='region'>
                                    {plan.options.map(option => {
                                        return <div className={`plan-select${plan.name}`} key={option.id}>
                                            <input type='radio' name={plan.name} id={option.sub} onChange={onChange} />
                                            <label htmlFor={option.sub} className='radio-label'>
                                                <span className={`plan-card-title radio-large-text container__${plan.name}`}>
                                                    {option.type}
                                                </span>
                                                <span className={`plan-card-content radio-small-text ${option.sub}`}>
                                                    {option.description}
                                                </span>
                                            </label>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </li>


                    })}
                </ul>

                <PlanOrderSummary onSubmit={handleSubmit} preferred={preferred} beanChoice={beanChoice} qty={qty} grind={grind} delivery={deliver} />
                <PlanCheckoutModal onSubmit={handleSubscribe} prefer={radioBtn.preference} bean={radioBtn.bean} quantity={radioBtn.quantity} grind={radioBtn.grind} deliver={radioBtn.deliveries} verb={verb} shipping={shippingCost} />

                <div className="overlay hide__overlay"></div>
            </div>
        </section >

    );


}
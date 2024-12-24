import { useState, useEffect } from 'react';
import { PlanQuestions } from '../planData';
import Modal from '../Subscribe/Modal';
import OrderSummary from '../Subscribe/OrderSummary';

const Accordion = () => {
    // Set the initial buttons as null
    const initialState = {
        preference: null,
        bean: null,
        quantity: null,
        grind: null,
        deliveries: null,
    }

    const [show, setShow] = useState(false);
    const [radioData, setRadioData] = useState(initialState);
    const [verb, setVerb] = useState('as');



    useEffect(() => {
        // will disable orderBtn if no selection made
        const orderBtn = document.querySelector('.order--btn')
        if (radioData.preference !== null && radioData.bean !== null && radioData.quantity !== null && radioData.deliveries !== null) {
            orderBtn.classList.remove('disabled')
        } else {
            orderBtn.classList.add('disabled')
        }
    }, [radioData])

    const preferDrink = radioData.preference === null ? '____' : radioData.preference
    const beanChoice = radioData.bean === null ? '____' : radioData.bean
    const qty = radioData.quantity === null ? '____' : radioData.quantity
    const grind = radioData.grind === null ? '____' : radioData.grind
    const delivery = radioData.deliveries === 'weekly' ? 'Every week' : radioData.deliveries === 'fortnight' ? 'Every 2 weeks' : radioData.deliveries === 'monthly' ? 'Every month' : '____'

    // Calculate total shipping cost per month per weight

    const shippingCost = () => {
        switch (qty) {
            case '250g':
                return radioData.deliveries === 'weekly' ? 7.20 * 4 : radioData.deliveries === 'fortnight' ? 9.60 * 2 : 12.00;
                break;
            case '500g':
                return radioData.deliveries === 'weekly' ? 13 * 4 : radioData.deliveries === 'fortnight' ? 17.50 * 2 : 22.00;
                break;
            case '1000g':
                return 'weekly' ? 22.00 * 4 : radioData.deliveries === 'fortnight' ? 32.00 * 2 : 42.00;
                break;
            default:
                return shippingCost;
        }
    }

    // Toggle Accordion control, click question
    // to reveal and close the answers
    // show available answers
    const handleShow = (e) => {
        setShow(!show)
        const btn = e.target
        const parent = btn.parentElement
        const attribute = btn.getAttribute('data-target')
        console.log(attribute)
        const targetDiv = parent.nextSibling
        // console.log(targetDiv)
        btn.classList.toggle('collapsed')
        targetDiv.classList.toggle(attribute)
        targetDiv.classList.toggle('collapse__show')
    }

    // Radion buttons to make selection
    const onChange = (e) => {
        console.log(e.target)
        const { name, id } = e.target
        setRadioData({ ...radioData, [name]: id })
        console.log(name)
        console.log(id)
        console.log(radioData)

        const preferredChoice = Array.from(document.querySelectorAll("input[name='preference']"))
        console.log(preferredChoice)
        const grind = document.getElementById('accordionBtn04')
        const grind__child = document.getElementById('collapse04')
        const show__grind = document.querySelector('.show__grind')
        const orderBtn = document.querySelector('.order--btn')

        // Check if first option selected is Capsule
        // If selected, disable grind option and uncheck

        const prefer = preferredChoice.filter(choice => choice.checked && choice.id === 'capsule')
        console.log(prefer)
        if (prefer.length > 0) {
            grind.classList.add('grind__disable')
            grind__child.classList.add('collapse04')
            show__grind.classList.add('hide__grind')
            setVerb('using')

        } else {
            grind.classList.remove('grind__disable')
            grind__child.classList.remove('collapse04')
            show__grind.classList.remove('hide__grind')
            setVerb('as')
            if (radioData.grind !== null) {
                orderBtn.classList.remove('disabled')
            } else {
                orderBtn.classList.add('disabled')
            }
        }

    }

    // Form submission - opens subscribe modal
    const handleSubmit = (e) => {
        const overlay = document.querySelector('.modal__overlay')
        const modal = document.querySelector('.modal__container')
        modal.classList.toggle('subscribe__show')
        overlay.classList.add('hide__overlay')
        e.preventDefault()
    }

    // Handle subscribe form checkout modal
    const handleSubscribe = (e) => {
        const overlay = document.querySelector('.modal__overlay')
        const modal = document.querySelector('.modal__container')
        modal.classList.toggle('subscribe__show')
        overlay.classList.add('hide__overlay')

        e.preventDefault()
    }

    return (
        <div className="accordion__container">
            <ul className="accordion">
                {PlanQuestions.map(plan => {
                    return <li className="accordion__list__item" key={plan.id}>
                        <div id={plan.name} className="accordion__item">
                            <h3 className="accordion__header">
                                <button aria-expanded={plan.id === '01' ? true : false} aria-controls={`collapse${plan.id}`} id={`accordionBtn&${plan.id}`} className={`accordion--btn`} onClick={handleShow} data-toggle='collapse' data-target={`collapse${plan.id}`}>{plan.question}</button>
                            </h3>
                            <div id={`collapse${plan.id}`} role='region' className={`plan__card collapse${plan.id}`}>
                                {plan.options.map(opt => {
                                    return <div className={`plan__select ${plan.name}`} key={opt.id}>
                                        <input type="radio" name={plan.name} id={opt.sub} onChange={onChange} />
                                        <label className='radio__label' htmlFor={opt.sub}>
                                            <span className={`plan__card__heading radio__heading container__${plan.name}`}>
                                                {opt.title}
                                            </span>
                                            <span className={`plan__card__text radio__text ${opt.sub}`}>
                                                {opt.answer}
                                            </span>

                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>
                    </li>
                })}
            </ul>

            <OrderSummary onSubmit={handleSubmit} drink={preferDrink} bean={beanChoice} quantity={qty} grind={grind} frequency={delivery} />
            <Modal onSubmit={handleSubscribe} drink={radioData.preference} bean={radioData.bean} quantity={radioData.quantity} grind={radioData.grind} frequency={radioData.deliveries} shipping={shippingCost()} verb={verb} />

        </div>
    )

};

export default Accordion;

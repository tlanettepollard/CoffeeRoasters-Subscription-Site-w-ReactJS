{/* 
import { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export function PlanAccordionItem({
    option, changeWord, setMenuActive, defaultChecked
}) {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };


    return (
        <div className={defaultChecked === "" ? 'accordion-item' : isActive ? 'accordion-item' : 'hidden'}>
            <div className="accordion">
                <div className="accordion-header">
                    <button className="option-btn" onClick={toggleActive}>
                        <h2 className="accordion-header-title">{option.title}</h2>
                        <span>{isActive ? <FaChevronUp className='option-chevron' /> : <FaChevronDown className='option-chevron' />}</span>
                    </button>
                </div>

                <div className='accordion-items'>
                    <div>
                        <input
                            type="radio"
                            name={option.id}
                            id={option.optionOne.title}
                            value={option.optionOne.title}
                            onChange={(e) => changeWord(e.target.value)}
                            checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                            onClick={setMenuActive}
                        />
                        <label className='label-inner' htmlFor={option.optionOne.title}>
                            <span className='label-title'>{option.optionOne.title}</span>
                            <span className='label-description'>{option.optionOne.description}</span>
                        </label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name={option.id}
                            id={option.optionTwo.title}
                            value={option.optionTwo.title}
                            onClick={setMenuActive}
                        />
                        <label className='label-inner' htmlFor={option.optionTwo.title}>
                            <span className='label-title'>{option.optionTwo.title}</span>
                            <span className='label-description'>{option.optionTwo.description}</span>
                        </label>

                    </div>
                    <div>
                        <input
                            type="radio"
                            name={option.id}
                            id={option.optionThree.title}
                            value={option.optionThree.title}
                            onClick={setMenuActive}
                        />
                        <label className='label-inner' htmlFor={option.optionThree.title}>
                            <span className='label-title'>{option.optionThree.title}</span>
                            <span className='label-description'>{option.optionThree.description}</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};
*/}
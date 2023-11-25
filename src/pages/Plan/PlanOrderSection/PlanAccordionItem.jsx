import { useState } from 'react';
//import { useToggle } from '../../../hooks/useToggle';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export function PlanAccordionItem(props) {
    //const { status: expand, toggleStatus: toggleExpand } = useToggle();
    const [isActive, setIsActive] = useState(false);
    const option = props.option;
    const changeWord = props.changeWord;
    const defaultChecked = 'Capsule';

    const toggleActive = () => {
        setIsActive(!isActive);
    };


    return (
        <div className={defaultChecked === "" ? 'accordion-item' : isActive ? 'accordion-item' : 'hidden'}>
            <div className="accordion">
                <div className="accordion-header">
                    <button className="option-btn" onClick={toggleActive}>
                        <h2 className="accordion-title">{option.title}</h2>
                        <span>{isActive ? <FaChevronUp className='option-chevron' /> : <FaChevronDown className='option-chevron' />}</span>
                    </button>
                </div>
                {isActive &&
                    <div className='accordion-items'>
                        <div onChange={(e) => changeWord(e.target.value)}>
                            <input
                                type="radio"
                                name={option.id}
                                id={option.optionOne.title}
                            />
                            <label className='option-inner' htmlFor={option.optionOne.title}>
                                <span className='option-title'>{option.optionOne.title}</span>
                                <span className='option-description'>{option.optionOne.description}</span>
                            </label>
                        </div>

                        <div onChange={(e) => changeWord(e.target.value)}>
                            <input
                                type="radio"
                                name={option.id}
                                id={option.optionTwo.title}
                            />
                            <label className='option-inner' htmlFor={option.optionTwo.title}>
                                <span className='option-title'>{option.optionTwo.title}</span>
                                <span className='option-description'>{option.optionTwo.description}</span>
                            </label>
                        </div>

                        <div onChange={(e) => changeWord(e.target.value)}>
                            <input
                                type="radio"
                                name={option.id}
                                id={option.optionThree.title}
                            />
                            <label className='option-inner' htmlFor={option.optionThree.title}>
                                <span className='option-title'>{option.optionThree.title}</span>
                                <span className='option-description'>{option.optionThree.description}</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
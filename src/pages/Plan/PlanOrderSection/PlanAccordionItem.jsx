import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export function PlanAccordionItem(props) {
    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    const option = props.option;
    const changeWord = props.changeWord;

    return (
        <div className="option">
            <button className="option-btn" onClick={toggleExpand}>
                <h2 className="option-title">{option.question}</h2>
                <span>{expland ? <FaChevronUp className='option-chevron' /> : <FaChevronDown className='option-chevron' />}</span>
            </button>

            {expand &&
                <div className='option-items'>
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
    );
};
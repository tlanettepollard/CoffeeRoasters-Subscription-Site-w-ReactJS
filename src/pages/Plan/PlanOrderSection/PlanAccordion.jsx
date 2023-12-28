import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

export function PlanAccordion(props) {

    const { status: expand, toggleStatus: toggleExpand } = useToggle();
    const option = props.option;
    const changeWord = props.changeWord;

    return (
        <div className="option">
            <button className='option-button' onClick={toggleExpand}>
                <h2 className="option-title">{option.question}</h2>
                <span>{expand ? <FiChevronUp className='option-chevron' /> : <FiChevronDown className='option-chevron' />}</span>
            </button>
            {expand &&
                <form className="option-items">
                    <div onChange={(e) => changeWord(e.target.value)}>
                        <input type='radio' name={option.id} id={option.optionOne.id} value={option.optionOne.title} />
                        <label className='option-label' htmlFor={option.optionOne.title}>
                            <span className='option-subtitle'>{option.optionOne.title}</span>
                            <span classname='option-text'>{option.optionOne.description}</span>
                        </label>
                    </div>
                    <div onChange={(e) => changeWord(e.target.value)}>
                        <input type='radio' name={option.id} id={option.optionTwo.id} value={option.optionTwo.title} />
                        <label className='option-label' htmlFor={option.optionTwo.title}>
                            <span className='option-subtitle'>{option.optionTwo.title}</span>
                            <span classname='option-text'>{option.optionTwo.description}</span>
                        </label>
                    </div>
                    <div onChange={(e) => changeWord(e.target.value)}>
                        <input type='radio' name={option.id} id={option.optionThree.id} value={option.optionThree.title} />
                        <label className='option-label' htmlFor={option.optionThree.title}>
                            <span className='option-subtitle'>{option.optionThree.title}</span>
                            <span classname='option-text'>{option.optionThree.description}</span>
                        </label>
                    </div>
                </form>
            }
        </div>
    );
}


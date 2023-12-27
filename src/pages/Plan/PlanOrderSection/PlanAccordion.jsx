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

                </form>
            }
        </div>
    );
}


import { useEffect, useState } from 'react';


export function PlanAccordion({
    question,
    changeWord,
    setMenuActive,
    defaultChecked }) {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };


    return (
        <div className={defaultChecked === "" ? 'accordion-item' : isActive ? 'accordion-item' : 'hidden'}>
            <div className="accordion">
                <div className="accordion-header" onClick={toggleActive}>
                    <p className="accordion-header-title">{question.title}</p>
                    <img src="/public/assets/plan/desktop/icon-arrow.svg" alt="" />
                </div>
                <div className="accordion-body">
                    <label htmlFor={question.optionOne.title} className="label">
                        <input
                            type="radio"
                            className="radio"
                            name={question.id}
                            id={question.optionOne.title}
                            value={question.optionOne.title}
                            onChange={(e) => changeWord(e.target.value)}
                            checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                            onClick={setMenuActive}
                        />
                        <div className="label-container">
                            <p className="label-title">{question.optionOne.title}</p>
                            <p className="label-description">
                                {question.optionOne.description}
                            </p>
                        </div>
                    </label>

                    <label htmlFor={question.optionTwo.title} className="label">
                        <input
                            type="radio"
                            className="radio"
                            name={question.id}
                            id={question.optionTwo.title}
                            value={question.optionTwo.title}
                            onChange={(e) => changeWord(e.target.value)}
                            onClick={setMenuActive}
                        />
                        <div className="label-container">
                            <p className="label-title">{question.optionTwo.title}</p>
                            <p className="label-description">
                                {question.optionTwo.description}
                            </p>
                        </div>
                    </label>

                    <label htmlFor={question.optionThree.title} className="label">
                        <input
                            type="radio"
                            className="radio"
                            name={question.id}
                            id={question.optionThree.title}
                            value={question.optionThree.title}
                            onChange={(e) => changeWord(e.target.value)}
                            onClick={setMenuActive}
                        />
                        <div className="label-container">
                            <p className="label-title">{question.optionThree.title}</p>
                            <p className="label-description">
                                {question.optionThree.description}
                            </p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}


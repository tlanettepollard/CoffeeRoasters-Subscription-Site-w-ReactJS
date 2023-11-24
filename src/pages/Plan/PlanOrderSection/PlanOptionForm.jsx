import { useState } from 'react';

export function PlanOptionForm({
    option,
    changeWord,
    setMenuActive,
    defaultChecked
}) {
    return (
        <>
            <label htmlFor={option.optionOne.title} className="label">
                <input
                    type="radio"
                    className="radio"
                    name={option.id}
                    id={option.optionOne.title}
                    value={option.optionOne.title}
                    onChange={(e) => changeWord(e.target.value)}
                    checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                    onClick={setMenuActive}
                />
                <div className="label-container">
                    <p className="label-title">{option.optionOne.title}</p>
                    <p className="label-description">
                        {option.optionOne.description}
                    </p>
                </div>
            </label>

            <label htmlFor={option.optionTwo.title} className="label">
                <input
                    type="radio"
                    className="radio"
                    name={option.id}
                    id={option.optionTwo.title}
                    value={option.optionTwo.title}
                    onChange={(e) => changeWord(e.target.value)}
                    checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                    onClick={setMenuActive}
                />
                <div className="label-container">
                    <p className="label-title">{option.optionTwo.title}</p>
                    <p className="label-description">
                        {option.optionTwo.description}
                    </p>
                </div>
            </label>

            <label htmlFor={option.optionThree.title} className="label">
                <input
                    type="radio"
                    className="radio"
                    name={option.id}
                    id={option.optionThree.title}
                    value={option.optionThree.title}
                    onChange={(e) => changeWord(e.target.value)}
                    checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                    onClick={setMenuActive}
                />
                <div className="label-container">
                    <p className="label-title">{option.optionThree.title}</p>
                    <p className="label-description">
                        {option.optionThree.description}
                    </p>
                </div>
            </label>
        </>
    );
}
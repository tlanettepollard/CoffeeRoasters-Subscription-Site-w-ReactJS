import { useState } from 'react';

export function SubAccordion({
    option,
    changeWord,
    setMenuActive,
    defaultChecked,
}) {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveBtn = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={defaultChecked === "" ? 'accordion-item' : isActive ? 'accordion-item' : 'hidden'}>
            <div className="accordion-header" onClick={toggleActiveBtn}>
                <h1>{option.title}</h1>
                <img src="/public/assets/plan/desktop/icon-arrow.svg" alt="" />
            </div>
            <div className="accordion-body">
                <label className='label' htmlFor={option.optionOne.title}>
                    <input
                        className='radio'
                        type='radio'
                        name={option.id}
                        id={option.optionOne.title}
                        value={option.optionOne.title}
                        onChange={(e) => changeWord(e.target.value)}
                        checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                        onClick={setMenuActive}
                    />
                    <div className="label-container label-container-one">
                        <p className="label-title">{option.optionOne.title}</p>
                        <p className='label-description'>{option.optionOne.description}</p>
                    </div>
                </label>

                <label className='label' htmlFor={option.optionTwo.title}>
                    <input
                        className='radio'
                        type='radio'
                        name={option.id}
                        id={option.optionTwo.title}
                        value={option.optionTwo.title}
                        onChange={(e) => changeWord(e.target.value)}
                        checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                        onClick={setMenuActive}
                    />
                    <div className="label-container">
                        <p className="label-title">{option.optionTwo.title}</p>
                        <p className='label-description'>{option.optionTwo.description}</p>
                    </div>
                </label>

                <label className='label' htmlFor={option.optionThree.title}>
                    <input
                        className='radio'
                        type='radio'
                        name={option.id}
                        id={option.optionThree.title}
                        value={option.optionThree.title}
                        onChange={(e) => changeWord(e.target.value)}
                        checked={defaultChecked === 'Capsule' ? 'defaultChecked' : null}
                        onClick={setMenuActive}
                    />
                    <div className="label-container">
                        <p className="label-title">{option.optionThree.title}</p>
                        <p className='label-description'>{option.optionThree.description}</p>
                    </div>
                </label>
            </div>
        </div>
    );
}
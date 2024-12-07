import React from "react";
import { useNavigate } from "react-router-dom";

export function HomeHero(props) {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <div className='hero home'>
            <div className='home__container'>
                <h1 className='homeHero__title'>{props.title}</h1>
                <p className='homeHero__summary'>{props.content}</p>
                <div className='homeHero__btn__container'>
                    <button onClick={changeRoute} className="btn primary-btn homeHero__btn">Create your plan</button>
                </div>
            </div>
        </div>
    );
}
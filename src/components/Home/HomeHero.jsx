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
            <h1 className='homeHero__title'>{props.title}</h1>
            <p className='homeHero__summary'>{props.content}</p>
            <button onClick={changeRoute} className="btn primary-button homeHero__button">Create your plan</button>
        </div>
    );
}
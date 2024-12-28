import React from "react";
import { useNavigate } from "react-router-dom";


export default function SharedHero(props) {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }


    return (
        <section className={`hero ${props.class}`}>
            <div className='hero__content'>
                <h2 className='hero__title'>
                    {props.title}
                </h2>
                <p className='hero__text'>{props.desc}</p>
                <button onClick={changeRoute} className="btn primary-btn hero__btn">{props.button}</button>
            </div>
        </section>
    );
};
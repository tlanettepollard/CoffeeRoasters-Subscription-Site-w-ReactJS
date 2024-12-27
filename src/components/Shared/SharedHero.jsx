import React from "react";

export default function SharedHero(props) {
    return (
        <div className={`hero ${props.class}`}>
            <div className='hero__content'>
                <h2 className='hero--title'>
                    {props.title}
                </h2>
                <p className='hero--desc'>{props.desc}</p>
            </div>
        </div>
    );
};
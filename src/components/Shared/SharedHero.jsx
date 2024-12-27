import React from "react";

export default function SharedHero(props) {
    return (
        <div className={`hero ${props.class}`}>
            <div className='sharedHero__content'>
                <h2 className='sharedHero--title'>
                    {props.title}
                </h2>
                <p className='sharedHero--desc'>{props.desc}</p>
            </div>
        </div>
    );
};
import React from "react";
import SharedHero from '../components/Shared/SharedHero';

export function About() {
    return (
        <main className='container'>
            <SharedHero class='about' title='About Us' desc='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.' />
        </main>
    );
};
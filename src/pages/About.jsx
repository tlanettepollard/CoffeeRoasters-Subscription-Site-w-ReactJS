import React from "react";
import SharedHero from '../components/Shared/SharedHero';
import { AboutCommitment } from "../components/About/AboutCommit";
import { AboutQuality } from "../components/About/AboutQuality";
import { AboutLocation } from "../components/About/AboutLocation";

export function About() {
    return (
        <main className='main__about'>
            <SharedHero class='about' title='About Us' desc='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.' />
            <AboutCommitment />
            <AboutQuality />
            <AboutLocation />
        </main>
    );
};
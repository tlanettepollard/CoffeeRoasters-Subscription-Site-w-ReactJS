import React from 'react';
import { HomeBanner } from './HomeBanner';
import { OurCollection } from './OurCollection';
import { WhyChoose } from './WhyChoose';
import { HowItWorks } from './HowItWorks';

export function Home() {
    return (
        <>
            <HomeBanner />
            <OurCollection />
            <WhyChoose />
            <HowItWorks />
        </>
    );
}
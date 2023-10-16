import React from 'react';
import { HomeBanner } from './HomeBanner';
import { OurCollection } from './OurCollection';
import { WhyChoose } from './WhyChoose';

export function Home() {
    return (
        <>
            <HomeBanner />
            <OurCollection />
            <WhyChoose />
        </>
    );
}
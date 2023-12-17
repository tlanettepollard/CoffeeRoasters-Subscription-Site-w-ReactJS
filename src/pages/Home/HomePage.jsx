import React from 'react';
import { HomeBanner } from './HomeBanner';
import { HomeCollection } from './HomeCollection';
import { HomeChoose } from './HomeChoose';
import { HomeWorks } from './HomeWorks';

export function Home() {
    return (
        <>
            <HomeBanner />
            <HomeCollection />
            <HomeChoose />
            <HomeWorks />
        </>
    );
}
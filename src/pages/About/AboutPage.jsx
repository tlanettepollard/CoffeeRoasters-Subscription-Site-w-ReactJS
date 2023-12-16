import React from 'react';
import { AboutBanner } from './AboutBanner';
import { AboutCommit } from './AboutCommit';
import { AboutQuality } from './AboutQuality';
import { AboutHeadQtrs } from './AboutHeadQtrs';

export function About() {
    return (
        <>
            <AboutBanner />
            <AboutCommit />
            <AboutQuality />
            <AboutHeadQtrs />
        </>
    );
}
import React from 'react';
import { AboutBanner } from './AboutBanner';
import { AboutCommit } from './AboutCommit';

export function About() {
    return (
        <>
            <AboutBanner />
            <AboutCommit />
        </>
    );
}
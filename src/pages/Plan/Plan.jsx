import { useState, useEffect } from 'react';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';




export function Plan() {




    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />


            </div>
        </>
    );
}
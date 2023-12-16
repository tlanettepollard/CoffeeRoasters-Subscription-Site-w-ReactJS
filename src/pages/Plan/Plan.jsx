import { useState, useEffect } from 'react';
import { PlanBanner } from './PlanBanner.jsx';
import { PlanHowSection } from './PlanHowSection.jsx';
import { PlanMenu } from './PlanOrderSection/PlanMenu.jsx';
//import { PlanAccordion } from './PlanOrderSection/PlanAccordion.jsx';





export function Plan() {

    return (
        <>
            <div className="plan-page">
                <PlanBanner />
                <PlanHowSection />
                <PlanMenu />


            </div>
        </>
    );
}
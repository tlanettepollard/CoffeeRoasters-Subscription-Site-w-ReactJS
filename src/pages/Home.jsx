import React from "react";
import { HomeHero } from "../components/Home/HomeHero";
import { HomeCollection } from "../components/Home/HomeCollection";
import { HomeBenefits } from "../components/Home/HomeBenefits";
import { WorkList } from "../components/Shared/WorkList";


export function Home() {
    return (
        <main className='container'>
            <HomeHero
                title='Great coffee made simple.'
                content='Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
            />
            <HomeCollection />
            <HomeBenefits />
            <WorkList />

        </main>
    )
}
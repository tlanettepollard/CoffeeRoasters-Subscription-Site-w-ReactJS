import { useEffect, useState } from 'react';

export function AboutQuality() {
    const imageCss1 = `@media (max-width: 767px){
        .bg-quality-image{
            background-image: url('/public/assets/about/mobile/bg-quality.png')
        }
    }
    @media (min-width: 768px){
        .bg-quality-image {
            background-image: url('/public/assets/about/tablet/bg-quality.png')
        }
    } 
    @media (min-width: 1200px){
        .bg-quality-image {
            background-image: url('/public/assets/about/desktop/bg-quality.png')
        }
    }`;

    const imageCss2 = `media (max-width: 767px){
        .about-quality-image{
            background-image: url('/public/assets/about/mobile/image-quality.jpg')
        }
    }
    @media (min-width: 768px){
        .about-quality-image {
            background-image: url('/public/assets/about/tablet/image-quality.jpg')
        }
    } 
    @media (min-width: 1200px){
        .about-quality-image {
            background-image: url('/public/assets/about/desktop/image-quality.jpg')
        }
    }`;



    return (
        <>
            <div className="about-section2">
                <style scoped>{imageCss1}</style>
                <div className="bg-quality-image"></div>
                <div className="about-quality-container">
                    <style scoped>{imageCss2}</style>
                    <div className="quality-image"></div>
                    <div className="about-quality-copy">
                        <p className="about-quality-title">Uncompromising quality</p>
                        <p className="about-quality-copy">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
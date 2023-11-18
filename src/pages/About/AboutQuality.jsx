import { useEffect, useState } from 'react';

export function AboutQuality() {
    const imageCss1 = `media (max-width: 767px){
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
        .quality-image{
            background-image: url('/public/assets/about/mobile/image-quality.jpg')
        }
    }
    @media (min-width: 768px){
        .quality-image {
            background-image: url('/public/assets/about/tablet/image-quality.jpg')
        }
    } 
    @media (min-width: 1200px){
        .quality-image {
            background-image: url('/public/assets/about/desktop/image-quality.jpg')
        }
    }`;



    return (
        <>
            <div className="about-section2">

            </div>
        </>
    );
}
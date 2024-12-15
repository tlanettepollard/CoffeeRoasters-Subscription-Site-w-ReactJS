// Collection Images
import granEspressoImg from '/src/assets/home/desktop/image-gran-espresso.png';
import dancheImg from '/src/assets/home/desktop/image-gran-espresso.png';
import piccolloImg from '/src/assets/home/desktop/image-piccollo.png';
import planaltoImg from '/src/assets/home/desktop/image-planalto.png';

// Benefits Images
import coffeeBeanImg from '/src/assets/home/desktop/icon-coffee-bean.svg';
import giftImg from '/src/assets/home/desktop/icon-gift.svg';
import truckImg from '/src/assets/home/desktop/icon-truck.svg';

// Commitment Images
import commitMobile from '/src/assets/about/mobile/image-commitment.jpg';
import commitTablet from '/src/assets/about/tablet/image-commitment.jpg';
import commitDesktop from '/src/assets/about/desktop/image-commitment.jpg';

import qualityMobile from '/src/assets/about/mobile/image-quality.jpg'
import qualityTablet from '/src/assets/about/tablet/image-quality.jpg'
import qualityDesktop from '/src/assets/about/desktop/image-quality.jpg';

// Headquarters Images

import ukImg from '/src/assets/about/desktop/illustration-uk.svg';
import canadaImg from '/src/assets/about/desktop/illustration-canada.svg';
import australiaImg from '/src/assets/about/desktop/illustration-australia.svg';


export const Collections = [
    {
        id: '1',
        title: 'Gran Espresso',
        summary: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        imgUrl: granEspressoImg,
        width: 200.3,
        height: 151,
        alt: 'Gran Espresso',
    },
    {
        id: '2',
        title: 'Planalto',
        summary: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        imgUrl: planaltoImg,
        width: 200.3,
        height: 151,
    },
    {
        id: '3',
        title: 'Piccollo',
        summary: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
        imgUrl: piccolloImg,
        width: 200.3,
        height: 151,
    },
    {
        id: '4',
        title: 'Danche',
        summary: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        imgUrl: dancheImg,
        width: 200.3,
        height: 151,
    },

];


export const BenefitCards = [
    {
        id: '5',
        title: 'Best Quality',
        summary: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        imgUrl: coffeeBeanImg,
        width: 72,
        height: 72,
        alt: 'coffee beans of superior quality'
    },
    {
        id: '6',
        title: 'Exclusive Benefits',
        summary: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        imgUrl: giftImg,
        width: 72,
        height: 72,
        alt: 'coffee beans of superior quality'
    },
    {
        id: '7',
        title: 'Free shipping',
        summary: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        imgUrl: truckImg,
        width: 72,
        height: 72,
        alt: 'coffee beans of superior quality'
    },
];


export const Works = [
    {
        id: '8',
        number: '01',
        title: 'Pick your coffee',
        summary: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
    },
    {
        id: '9',
        number: '02',
        title: 'Choose the frequency',
        summary: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
    },
    {
        id: '10',
        number: '03',
        title: 'Recieve and enjoy',
        summary: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience',
    },
];

export const Countries = [
    {
        id: '11',
        imgUrl: ukImg,
        width: 40.84,
        height: 49.07,
        country: 'United Kingdom',
        street: '68 Asfordby Rd',
        city: 'Alcaston',
        postcode: 'SY6 1YA',
        phone: '+44 1241 918425',
        alt: 'site location in united kingdom',

    },
    {
        id: '12',
        imgUrl: canadaImg,
        width: 51.56,
        height: 49.96,
        country: 'Canada',
        street: '1528 Eglinton Avenue',
        city: 'Toronto',
        postcode: 'Ontario M4P 1A6',
        phone: '+1 416 485 2997',
        alt: 'site location in canada',

    },
    {
        id: '13',
        imgUrl: australiaImg,
        width: 48.97,
        height: 43.94,
        country: 'Australia',
        street: '36 Swanston Street',
        city: 'Kewell',
        postcode: 'Victoria',
        phone: '+61 4 9928 3629',
        alt: 'site location in australia',

    },
];

export const Commitment = [
    {
        id: '14',
        title: 'Our commitment',
        alt: 'man making coffee',
        imgUrl: {
            mobile: commitMobile,
            tablet: commitTablet,
            desktop: commitDesktop,
        },
        summary: 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.',
    },
]
export const Quality = [
    {
        id: '15',
        title: 'Uncompromising quality',
        alt: 'coffee in white mug',
        imgUrl: {
            mobile: qualityMobile,
            tablet: qualityTablet,
            desktop: qualityDesktop,
        },
        summary: 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
    },
];


export const PlanQuestions = [
    {
        id: '01',
        question: 'How do you drink your coffee?',
        option1: {
            id: 'Capsule',
            title: 'Capsule',
            answer: 'Compatible with Nespresso systems and similar brewers',
        },
        option2: {
            id: 'Filter',
            title: 'Filter',
            answer: 'For pour over or drip methods like Aeropress, Chemex, V60',
        },
        option3: {
            id: 'Espresson',
            title: 'Espresso',
            answer: 'Dense and finely ground beans for an intense flavorful experience',
        },
        open: false,

    },

    {
        id: '02',
        question: 'What type of coffee?',
        option1: {
            id: 'Single origin',
            title: "Single origin",
            answer: 'Distinct high quality coffee from a specific family-owned farm',
        },
        option2: {
            id: 'Decaf',
            title: 'Decaf',
            answer: 'Just like regular coffee, except the caffeine has been removed',
        },
        option3: {
            id: 'Blended',
            title: 'Blended',
            answer: 'Combination of two or three dark roasted beans of organic coffees',
        },
        open: false,

    },

    {
        id: '03',
        question: 'How much would you like?',
        option1: {
            id: '250g',
            title: '250g',
            answer: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        option2: {
            id: '500g',
            title: '500g',
            answer: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        option3: {
            id: '1000g',
            title: '1000g',
            answer: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
        open: false,

    },

    {
        id: '04',
        question: 'Want us to grind them?',
        option1: {
            id: 'Wholebean',
            title: 'Wholebean',
            answer: 'Best choice if you cherish the full sensory experience',
        },
        option2: {
            id: 'Filtered',
            title: 'Filtered',
            answer: 'For drip or pour-over coffee methods such as V60 and Aeropress',
        },
        option3: {
            id: 'Cafetiére',
            title: 'Cafetiére',
            answer: 'Course ground beans specifically suited for french press coffees',
        },
        open: false,
    },

    {
        id: '05',
        question: 'How often should we deliver?',
        option1: {
            id: 'Weekly',
            title: 'Every week',
            answer: '$14.00 per shipment. Includes free first-class shipping.',
        },
        option2: {
            id: 'Fortnight',
            title: 'Every 2 weeks',
            answer: '$17.25 per shipment. Includes free priority shipping.',
        },
        option3: {
            id: 'Monthly',
            title: 'Every month',
            answer: '$22.50 per shipment. Includes free first-class shipping.',
        },
        open: false,
    },
];


export const ChoicesNav = [
    {
        id: '16',
        number: '01',
        title: 'Preferences',
    },
    {
        id: '17',
        number: '02',
        title: 'Bean Type',
    },
    {
        id: '18',
        number: '03',
        title: 'Quantity',
    },
    {
        id: '19',
        number: '04',
        title: 'Grind Options',
    },
    {
        id: '20',
        number: '05',
        title: 'Deliveries',
    },
];
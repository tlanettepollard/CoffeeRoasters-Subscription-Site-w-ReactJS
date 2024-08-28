// Collection Images
import granEspressoImg from '../../public/assets/home/desktop/image-gran-espresso.png';
import dancheImg from '../../public/assets/home/desktop/image-danche.png';
import piccolloImg from '../../public/assets/home/desktop/image-piccollo.png';
import planaltoImg from '../../public/assets/home/desktop/image-planalto.png';

// Benefits Images
import coffeeBeanImg from '../../public/assets/home/desktop/icon-coffee-bean.svg';
import giftImg from '../../public/assets/home/desktop/icon-gift.svg';
import truckImg from '../../public/assets/home/desktop/icon-truck.svg';

// Commitment Images
import commitMobile from '../../public/assets/about/mobile/image-commitment.jpg';
import commitTablet from '../../public/assets/about/tablet/image-commitment.jpg';
import commitDesktop from '../../public/assets/about/desktop/image-commitment.jpg';

import qualityMobile from '../../public/assets/about/mobile/image-quality.jpg'
import qualityTablet from '../../public/assets/about/tablet/image-quality.jpg'
import qualityDesktop from '../../public/assets/about/desktop/image-quality.jpg';

// Headquarters Images

import ukImg from '../../public/assets/about/desktop/illustration-uk.svg';
import canadaImg from '../../public/assets/about/desktop/illustration-canada.svg';
import australiaImg from '../../public/assets/about/desktop/illustration-australia.svg';


export const Collections = [
    {
        id: '1',
        title: 'Gran Espresso',
        summary: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        imgUrl: granEspressoImg,
    },
    {
        id: '2',
        title: 'Planalto',
        summary: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        imgUrl: planaltoImg,
    },
    {
        id: '3',
        title: 'Piccollo',
        summary: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
        imgUrl: piccolloImg,
    },
    {
        id: '4',
        title: 'Danche',
        summary: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        imgUrl: dancheImg,
    },

];


export const BenefitCards = [
    {
        id: '5',
        title: 'Best Quality',
        summary: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        imgUrl: coffeeBeanImg,
        alt: 'coffee beans of superior quality'
    },
    {
        id: '6',
        title: 'Exclusive Benefits',
        summary: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        imgUrl: giftImg,
        alt: 'coffee beans of superior quality'
    },
    {
        id: '7',
        title: 'Free shipping',
        summary: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        imgUrl: truckImg,
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
        address1: '68 Asfordby Rd',
        city: 'Alcaston',
        postcode: 'SY6 1YA',
        number: '+44 1241 918425',

    },
    {
        id: '12',
        imgUrl: canadaImg,
        width: 51.56,
        height: 49.96,
        country: 'Canada',
        address1: '1528 Eglinton Avenue',
        city: 'Toronto',
        postcode: 'Ontario M4P 1A6',
        number: '+1 416 485 2997',

    },
    {
        id: '13',
        imgUrl: australiaImg,
        width: 48.97,
        height: 43.94,
        country: 'Australia',
        address1: '36 Swanston Street',
        city: 'Kewell',
        postcode: 'Victoria',
        number: '+61 4 9928 3629',

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
    }
]


export const SubQuestions = [
    {
        id: '16',
        question: 'How do you drink your coffee?',
        preferred: 'Preferences',
        name: 'preferences',
        options: [
            {
                id: '20',
                sub: 'capsule',
                type: 'Capsule',
                answer: 'Compatible with Nespresso systems and similar brewers',
            },
            {
                id: '21',
                sub: 'filter',
                type: 'Filter',
                answer: 'For pour over or drip methods like Aeropress, Chemex, V60',
            },
            {
                id: '22',
                sub: 'espresso',
                type: 'Espresso',
                answer: 'Dense and finely ground beans for an intense flavorful experience',
            }
        ]

    },


    {
        id: '17',
        question: 'What type of coffee?',
        preferred: 'Bean Type',
        name: 'bean',
        options: [
            {
                id: '30',
                sub: 'single',
                type: "Single origin",
                answer: 'Distinct high quality coffee from a specific family-owned farm',
            },
            {
                id: '31',
                sub: 'decaf',
                type: 'Decaf',
                answer: 'Just like regular coffee, except the caffeine has been removed',
            },
            {
                id: '32',
                sub: 'blended',
                type: 'Blended',
                answer: 'Combination of two or three dark roasted beans of organic coffees',
            }
        ]
    },

    {
        id: '18',
        question: 'How much would you like?',
        preferred: 'Quantity',
        name: 'quantity',
        options: [
            {
                id: '40',
                sub: '250g',
                type: '250g',
                answer: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
            },
            {
                id: '41',
                sub: '500g',
                type: '500g',
                answer: 'Perfect option for a couple. Yields about 40 delectable cups.',
            },
            {
                id: '42',
                sub: '1000g',
                type: '1000g',
                answer: 'Perfect for offices and events. Yields about 90 delightful cups.',
            }

        ]
    },

    {
        id: '19',
        question: 'Want us to grind them?',
        preferred: 'Grind Option',
        name: 'grind',
        options: [
            {
                id: '50',
                sub: 'wholebean',
                type: 'Wholebean',
                answer: 'Best choice if you cherish the full sensory experience',
            },
            {
                id: '51',
                sub: 'filtered',
                type: 'Filtered',
                answer: 'For drip or pour-over coffee methods such as V60 and Aeropress',
            },
            {
                id: '52',
                sub: 'cafetiére',
                type: 'Cafetiére',
                answer: 'Course ground beans specifically suited for french press coffees',
            }
        ]

    },

    {
        id: '20',
        question: 'How often should we deliver?',
        preferred: 'Deliveries',
        name: 'delivery',
        options: [
            {
                id: '60',
                sub: 'weekly',
                type: 'Every week',
                answer: '$14.00 per shipment. Includes free first-class shipping.',
            },
            {
                id: '61',
                sub: 'fortnight',
                type: 'Every 2 weeks',
                description: '$17.25 per shipment. Includes free priority shipping.',
            },
            {
                id: '62',
                sub: 'monthly',
                type: 'Every month',
                answer: '$22.50 per shipment. Includes free first-class shipping.',
            }
        ]

    },
];


export const SubscribeNav = [
    {
        id: '21',
        number: '01',
        title: 'Preferences',
    },
    {
        id: '22',
        number: '02',
        title: 'Bean Type',
    },
    {
        id: '23',
        number: '03',
        title: 'Quantity',
    },
    {
        id: '24',
        number: '04',
        title: 'Grind Options',
    },
    {
        id: '25',
        number: '05',
        title: 'Deliveries',
    },
];
export const PlanQuestions = [
    {
        id: '01',
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
        id: '02',
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
        id: '03',
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
        id: '04',
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
        id: '05',
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


export const MenuChoices = [
    {
        id: 6,
        number: '01',
        sub: 'preferences',
        title: 'Preferences',
    },
    {
        id: 7,
        number: '02',
        sub: 'beantype',
        title: 'Bean Type',
    },
    {
        id: 8,
        number: '03',
        sub: 'quantity',
        title: 'Quantity',
    },
    {
        id: 9,
        number: '04',
        sub: 'grind',
        title: 'Grind Options',
    },
    {
        id: 10,
        number: '05',
        sub: 'delivery',
        title: 'Deliveries',
    },
];
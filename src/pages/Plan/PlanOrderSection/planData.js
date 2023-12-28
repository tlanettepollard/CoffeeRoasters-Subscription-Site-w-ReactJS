export const PlanQuestions = [
    {
        id: 1,
        question: 'How do you drink your coffee?',
        name: 'preferences',
        optionOne: {
            id: 'Capsule',
            title: 'Capsule',
            description: 'Compatible with Nespresso systems and similar brewers',
        },

        optionTwo: {
            id: 'Filter',
            title: 'Filter',
            description: 'For pour over or drip methods like Aeropress, Chemex, V60',
        },
        optionThree: {
            id: 'Espresso',
            title: 'Espresso',
            description: 'Dense and finely ground beans for an intense flavorful experience',
        },
        open: false,
    },

    {
        id: 2,
        question: 'What type of coffee?',
        name: 'beantype',
        optionOne: {
            id: 'Single',
            title: "Single Origin",
            description: 'Distinct high quality coffee from a specific family-owned farm',
        },
        optionTwo: {
            id: 'Decaf',
            title: 'Decaf',
            description: 'Just like regular coffee, except the caffeine has been removed',
        },
        optionThree: {
            id: 'Blended',
            title: 'Blended',
            description: 'Combination of two or three dark roasted beans of organic coffees',
        },
        open: false,
    },

    {
        id: 3,
        question: 'How much would you like?',
        name: 'quantity',
        optionOne: {
            id: '250g',
            title: '250g',
            description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        optionTwo: {
            id: '500g',
            title: '500g',
            description: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        optionThree: {
            id: '1000g',
            type: '1000g',
            description: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
        open: false,

    },

    {
        id: 4,
        question: 'Want us to grind them?',
        name: 'grind',
        optionOne: {
            id: 'Wholebean',
            title: 'Wholebean',
            description: 'Best choice if you cherish the full sensory experience',
        },
        optionTwo: {
            id: 'Filtered',
            title: 'Filtered',
            description: 'For drip or pour-over coffee methods such as V60 and Aeropress',
        },
        optionThree: {
            id: 'Cafetiére',
            title: 'Cafetiére',
            description: 'Course ground beans specifically suited for french press coffees',
        },
        open: false,

    },

    {
        id: 5,
        question: 'How often should we deliver?',
        name: 'delivery',
        optionOne: {
            id: 'Every week',
            title: 'Every week',
            description: '$14.00 per shipment. Includes free first-class shipping.',
        },
        optionTwo: {
            id: 'Every 2 weeks',
            title: 'Every 2 weeks',
            description: '$17.25 per shipment. Includes free priority shipping.',
        },
        optionThree: {
            id: 'Every month',
            title: 'Every month',
            description: '$22.50 per shipment. Includes free first-class shipping.',
        },
        open: false,

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
import { reactive } from 'vue';
export const store = reactive({

    links: [
        {
            title: 'home',
            url: '#',
            active: true
        },
        {
            title: 'about',
            url: '#aboutUs',
            active: false
        },
        {
            title: 'project',
            url: '#project',
            active: false
        },
        {
            title: 'services',
            url: '#services',
            active: false
        },
        {
            title: 'blog',
            url: '#blog',
            active: false
        },
        {
            title: 'contact',
            url: '#contact',
            active: false
        },
    ],

    consultants: [
        {
            title: 'STATISTICAL CONSULTING',
            p: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: "fa-solid fa-chart-line"
        },
        {
            title: 'DIGITAL CONSULTING',
            p: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: "fa-solid fa-bullhorn"
        },
        {
            title: 'BANKING CONSULTING',
            p: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: "fa-solid fa-wallet"
        },
        {
            title: 'ENTERPRISE CONSULTING',
            p: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
            icon: "fa-solid fa-chart-line"
        },
    ],

    projects: [
        {
            image: "/images/DRY.jpg",
            product: 'Purinky products',
            categorize: 'Uncategorized',

        },
        {
            image: "/images/proposal.jpg",
            product: 'Purinky products',
            categorize: 'Uncategorized',

        },
        {
            image: "/images/vizeon.jpg",
            product: 'Purinky products',
            categorize: 'Uncategorized',

        },
    ],
    testimonials: [
        {
            cit: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Vera Duncan',
            image: '/images/oliver-ragfelt-488196-2.jpg',
            workCompany: 'Amazon Inc.'
        },

        {
            cit: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Dr. Gregorio Casa',
            image: '/images/12679.jpg',
            workCompany: 'Princeton-Plainsboro University'
        },
        {
            cit: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz of the little .',
            name: 'Enrico Vasaio',
            image: '/images/oliver-ragfelt-488196-unsplash.jpg',
            workCompany: 'Babbani corp.'
        },

    ]
})
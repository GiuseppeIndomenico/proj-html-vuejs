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
    ]
})
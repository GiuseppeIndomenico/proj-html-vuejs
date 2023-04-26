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
            url: '#',
            active: false
        },
        {
            title: 'project',
            url: '#',
            active: false
        },
        {
            title: 'services',
            url: '#',
            active: false
        },
        {
            title: 'blog',
            url: '#',
            active: false
        },
        {
            title: 'contact',
            url: '#',
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
    ]
})
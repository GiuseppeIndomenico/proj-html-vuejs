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
    ]

})
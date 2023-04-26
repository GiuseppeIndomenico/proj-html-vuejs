<template>
    <header>

        <nav class="container d-flex justify-content-between">
            <div class="logo">
                <img class="img-fluid" src="\images\logotype.png" alt="logo">
            </div>
            <ul class="d-flex align-items-center justify-content-center m-0">
                <li v-for="(link, index) in store.links" :class="{ 'active': link.active }" @click="setActive(index)"
                    class="p-3 d-flex align-items-center">
                    <a @click="setActive()" class="fw-semibold text-uppercase" :href="link.url">{{ link.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { store } from '../data/store';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        setActive(index) {
            store.links.forEach((link, i) => {
                if (i === index) {
                    link.active = true;
                } else {
                    link.active = false;
                }
            });

        }

    }

}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;


.active {
    border-top: 3px inset $light;

    a {
        color: $light
    }
}
</style>
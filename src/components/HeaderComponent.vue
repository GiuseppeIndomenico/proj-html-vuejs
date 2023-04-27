<template>
    <header>
        <img class="jumbo" src="\images\portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg" alt="">
        <nav class="d-flex justify-content-between align-items-center">
            <div class="logo">
                <img class="img-fluid" src="\images\logotype.png" alt="logo">
            </div>
            <ul class="d-flex align-items-center justify-content-center m-0">
                <li v-for="(link, index) in store.links" :class="{ 'active': link.active }" @click="setActive(index)"
                    class="p-3 d-flex align-items-center">
                    <a @click="setActive()" class="text-uppercase" :href="link.url">{{ link.title }}</a>
                </li>
            </ul>
        </nav>
        <div class="title">
            <div class="d-flex justify-content-start align-items-center mb-3">
                <div class="gi-tratto"></div>
                <h5>ALWATS THE BEST WAY YOU NEED IT</h5>
            </div>
            <h1 class="mb-4">THE BEST BUSINESS CONSULTING</h1>
            <button class="gi-button">READ MORE</button>
            <span class=" rounded-circle ms-4 click">
                <i class="fa-solid fa-play"></i>
            </span>

        </div>
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

header {
    width: 100%;
    height: 100vh;
    background-color: $primary;

    .jumbo {
        height: 100vh;
        width: 70%;
        object-fit: fill;
        position: absolute;
        right: 0;
        z-index: 1;
    }

    nav {
        width: 90%;
        margin: auto;

        .logo {
            width: 130px;
        }

        a {
            text-decoration: none;
            color: $light;
            opacity: 0.7;
            z-index: 2;
            background-color: transparent;
            font-weight: 300;
        }
    }

    .gi-tratto {
        padding: 2px;
        background-color: $sec;
        width: 50px;
        margin-bottom: 5px;
    }

    span {
        border: 2px solid $light;
        width: 75px;
        height: 75px;
        padding: 20px;

        i {
            color: $sec;
        }
    }

    .click {
        cursor: pointer;
    }

    .title {
        z-index: 10;
        color: $light;
        width: 40%;
        position: absolute;
        background-color: transparent;
        top: 40%;
        left: 5.5%;

        h5 {
            font-size: 1rem;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 2.8px;
            padding-left: 20px;
        }

        h1 {
            font-size: 106px;
            font-weight: 700;
            line-height: 93px;
            letter-spacing: -2px;
            z-index: 1000000;
        }
    }

    .active {
        border-top: 3px inset white;
        z-index: 2;
        background-color: transparent;

        a {
            color: $light;
            opacity: 1;
            font-weight: bold;
        }
    }
}
</style>
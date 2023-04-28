<template>
    <footer>
        <div class="img-cont position-relative">
            <img class="" src="\images\business-people-working-together-on-project-and-B3MZ4TX.jpg" alt="">
            <div class="d-flex flex-column align-items-center position-absolute gi-text-footer">
                <h3>LET'S TALK ABOUT WORK</h3>
                <p>A wonderful serenity has taken possession Far far away, behind the word mountains.</p>
                <button class="btn-footer">GET STARTED</button>
            </div>


        </div>
    </footer>
</template>

<script>
import { store } from '../data/store';

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

footer {
    background-color: $primary;
    color: $light;
    height: 100vh;

    .img-cont {
        width: 100%;
        height: 55vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }

    .btn-footer {
        padding: 25px 60px;
        border: 0;
        transition: all 0.25s;
        font-size: 22px;
        font-family: $mont;
        font-weight: 500;
        background-color: $primary;
        color: $light;

        &:hover {
            background-color: $sec;
        }
    }

    .gi-text-footer {
        top: 30%;
        right: 30%;

        h3 {
            font-size: 50px;
            margin-bottom: 1rem;
            font-weight: 700;
            font-family: $bay;
        }

        p {
            opacity: 0.9;
            font-family: $mont;
            font-size: 20px;
            width: 65%;
            text-align: center;
            padding-bottom: 1rem;
        }


    }
}
</style>
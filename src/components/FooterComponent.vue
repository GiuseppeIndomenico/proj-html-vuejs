<template>
    <footer>
        <div class="img-cont position-relative">
            <img class="" src="\images\business-people-working-together-on-project-and-B3MZ4TX.jpg" alt="">
            <div class="d-flex flex-column align-items-center position-absolute gi-text-footer">
                <h3>LET'S TALK ABOUT WORK</h3>
                <p>A wonderful serenity has taken possession Far far away, behind the word mountains.</p>
                <button class="btn-footer">GET STARTED</button>
            </div>

            <div class="d-flex align-item-center justify-content-between px-4 nav-footer">
                <div class=" cont-logo">
                    <img src="\images\logotype-2-150x25.png" alt="">
                </div>
                <ul class="d-flex list-unstyled">

                    <LinkFooterComponent v-for="li in store.links" :title="li.title" :url="li.url" />
                </ul>
                <div>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div class="px-4">
                <hr>
                <div class="d-flex justify-content-between align-items-center mt-4 terms">
                    <p>Terms of use <br>
                        Privacy Environmental Policy</p>

                    <p>Copyright © 2023 Phlox Consulting. All Rights Reserved.</p>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
import { store } from '../data/store';
import LinkFooterComponent from './LinkFooterComponent.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        LinkFooterComponent
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

    .nav-footer {
        margin: 6rem 0rem;

        .cont-logo {
            width: 200px;
            height: 32px;
        }

        i {
            font-size: 24px;
            padding: 1rem;

            &:hover {
                color: $hover-color
            }
        }
    }

    .terms {
        color: $light;
        opacity: 0.8;
        font-family: $mont;
        line-height: 2rem;
    }
}
</style>
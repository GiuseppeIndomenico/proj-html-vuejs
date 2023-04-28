<template>
    <main class="mt-4">
        <div class="d-flex mt-5">
            <h3 class="title-main">OUR CONSULTANTS CAN HELP YOU</h3>
            <div class="gi-tratto long"></div>
        </div>
        <div class="container vh-100">
            <div class="row">
                <ConsultComponent v-for="cons in store.consultants" :title="cons.title" :p="cons.p" :icon="cons.icon" />
            </div>
        </div>

        <AboutComponent />

        <section id="project" class="dark vh-100 start-chapter">

            <div class="row mt-5 px-3">
                <div class="col-8">
                    <div class="d-flex align-items-center">
                        <div class="gi-tratto short me-2 mb-3"></div>
                        <h5>PROJECT</h5>
                    </div>
                    <h2 class="fw-bold">OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h2>
                </div>
                <div class="col-3 d-flex align-items-center ms-5">
                    <div class="square m-1 d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div class="square m-1 d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>


            </div>
            <div class="row mt-5 px-3">
                <ProjectComponent v-for="project in store.projects  " :url="project.image" :product="project.product"
                    :categorize="project.categorize" />
            </div>
        </section>

        <section class="dark start-chapter ps-4" id="testimonial">
            <div class="row">
                <div class="col-10">
                    <h5 class="text-center m-0">TESTIMONIAL</h5>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-end ">
                    <div class="gi-tratto short ms-2 me-3"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6">
                    <h2 class="fw-bold text-end pe-3">WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h2>
                </div>
            </div>
            <div class="d-flex">
                <TestimonialComponent v-for="test in store.testimonials" :name="test.name" :image="test.image"
                    :cit="test.cit" :work="test.workCompany" />
            </div>
        </section>
        <section id="blog" class="dark start-chapter p-5">
            <div class="d-flex align-items-center">
                <div class="gi-tratto short me-2 mb-3"></div>
                <h5>BLOG</h5>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-5">
                <h2 class="fw-bold">THE RECENT NEWS YOU MUST READ IT</h2>

                <button class="gi-button">VIEW ALL</button>
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="gi-cont-img position-relative">
                        <img class="img-fluid"
                            src="\images\startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg" alt="">
                        <div class="text-dark gi-text-card position-absolute">
                            <span class="text-danger">july 4, 2019 by paul</span>
                            <h3>Canadian Consulting Firm acquired by UK Giant</h3>
                            <p>
                                When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                                impenetrable foliage of my trees, and but a ...
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="gi-cont-img position-relative">
                        <img class="img-fluid"
                            src="\images\business-people-working-together-on-project-and-5FHSKBL-1390.jpg" alt="">
                        <div class="text-dark gi-text-card position-absolute">
                            <span class="text-danger">july 4, 2019 by paul</span>
                            <h3>Canadian Consulting Firm acquired by UK Giant</h3>
                            <p>
                                When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                                impenetrable foliage of my trees, and but a ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </main>
</template>

<script>
import { store } from '../data/store';
import ConsultComponent from './ConsultComponent.vue';
import ProjectComponent from './ProjectComponent.vue';
import TestimonialComponent from './TestimonialComponent.vue';
import AboutComponent from './AboutComponent.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        ConsultComponent,
        ProjectComponent,
        TestimonialComponent,
        AboutComponent,
    }
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

h3 {
    font-family: $bay;

}

.start-chapter {
    padding-top: 150px;
}

.title-main {
    margin-left: 180px;
    font-size: 32px;
    font-weight: bold;
}

.gi-tratto {
    background-color: $sec;
    height: 3px;

}

.long {
    width: 50%;
    margin-top: 20px;
    margin-left: 10px;
}

.short {
    width: 50px;
    margin-bottom: 5px;
}

.dark {
    background-color: $primary;
    color: $light;
    overflow-x: hidden;
}

h2 {
    font-family: $bay;
    font-size: 60px;
    margin-bottom: 2rem;
}

.gi-card {
    max-width: 550px;

    p {
        font-family: $mont;
        opacity: 0.7;
        line-height: 1.7rem;
    }


}

h5 {
    font-weight: 400;
    letter-spacing: 8px;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-family: $bay;
}

.cont-img {
    height: 600px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
}

.green {
    background-color: $sec;
    color: $primary;
    height: 330px;
}

.title-big {
    font-size: 38px;
    font-family: $bay;
}

.limit-400 {
    max-width: 400px;
}

.p-gi {
    font-size: 20px;
    max-width: 700px;
    letter-spacing: 2px;
}

.red-btn {
    padding: 20px 50px;
    border: 0;
    transition: all 0.25s;
    background-color: $hover-color;
    color: $light;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 18px;
    font-family: $mont;
    border: 1px inset transparent;

    &:hover {
        background-color: $primary;
        border: 1px inset $sec;

    }
}

.square {
    padding: .5rem;
    width: 50px;
    height: 50px;
    background-color: rgba($color: #ffffff, $alpha: 0.2);
    transition: all .25s;

    i {
        font-size: 20px;
    }

    &:hover {
        background-color: $sec;
    }

}

.testimonial {
    height: 100vh;
}

.gi-text-card {
    width: 80%;
    font-family: $mont;
    right: 0;
    bottom: -24px;
    padding: 3rem 5rem;
    transition: all .25s;
    background-color: $light;

    &:hover {
        background-color: $sec;
    }

    span {
        font-size: 20px;
        font-weight: 500;
    }

    h3 {
        font-size: 32px;
        margin-bottom: 2rem;
        width: 70%;
        font-weight: 600;
    }

    p {
        opacity: 0.9;
        line-height: 2rem;
        font-size: 20px;
    }
}
</style>
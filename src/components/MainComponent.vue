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
        <section id="aboutUs" class="dark vh-100">
            <div class="row">
                <div class="col-7">
                    <div class="cont-img">
                        <img src="\images\business-people-working-together-on-project-and-5FHSKBL.jpg" alt="">
                    </div>
                </div>
                <div class="col-5 d-flex align-items-center dark p-5">
                    <div class="gi-card">
                        <div class="d-flex align-items-center">
                            <div class="gi-tratto short me-2  mb-3"></div>
                            <h5>ABOUT US</h5>
                        </div>
                        <h2 class="fw-bold">WE MAKE YOUR STRATEGY WORK</h2>
                        <p>When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                            impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the
                            buzz of the little world among the stalks,and grow familiar indescribable forms of the insects
                            .and flies, then I feel the presence of the Almighty . </p>
                    </div>
                </div>
            </div>
            <div class="col-11 position-relative green d-flex align-items-center justify-content-around px-5">
                <button class="red-btn fw-semibold">GET STARTED</button>

                <span class="title-big fw-bold limit-400">WE HELP TO DELIVER THE BUSINESS CASE</span>
                <p class="p-gi">When, while lovely valley teems with vapour around meand meridian sun strikes the
                    upper impenetrable
                    foliage of my trees, and but a thousand unknown</p>

            </div>
        </section>
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
                    <div class="square m-1 d-flex align-items-center justify-content-center"><i
                            class="fa-solid fa-arrow-left"></i></div>
                    <div class="square m-1 d-flex align-items-center justify-content-center"><i
                            class="fa-solid fa-arrow-right"></i></div>
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
                    <h5 class="text-center">TESTIMONIAL</h5>
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
    </main>
</template>

<script>
import { store } from '../data/store';
import ConsultComponent from './ConsultComponent.vue';
import ProjectComponent from './ProjectComponent.vue';
import TestimonialComponent from './TestimonialComponent.vue';
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
    font-size: 64px;
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
</style>
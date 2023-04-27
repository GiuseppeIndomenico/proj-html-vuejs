<template>
    <div class="mb-3">
        <div class="cont-img position-relative">
            <img :src="image" :alt="name">
            <div class="container-fluid gi-text d-flex flex-column justify-content-center align-items-start">
                <p class="mb-5 fw-light">
                    {{ cit }}
                </p>
                <h4 class="fw-bold mb-3">{{ name }}</h4>
                <span class="fw-light">{{ work }}</span>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'cit',
        'name',
        'work',
        'image'
    ]
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

.cont-img {
    width: 630px;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gi-text {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 2rem 4rem;
        color: $dark;
        background-color: $light;
        transition: all .25s;

        p {
            font-size: 20px;
            letter-spacing: 2px;
            opacity: 1;
            font-family: $mont;

        }

        h4 {
            font-family: $bay;
            font-size: 30px;
        }

        span {
            opacity: 1;

        }

        &:hover {
            background-color: transparent;
            color: $light;

            p,
            span {
                opacity: 0.9;
            }

        }
    }
}
</style>
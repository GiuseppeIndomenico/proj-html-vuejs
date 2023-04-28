<template>
    <li>
        <a class="text-decoration-none p-3 text-uppercase fw-light" :href="url">{{ title }}</a>
    </li>
</template>

<script>

export default {
    props: ['title', 'url']
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

a {
    color: $light;
    opacity: 0.8;
    font-family: $mont;
    font-size: 20px;

    &:hover {
        color: $hover-color
    }
}
</style>
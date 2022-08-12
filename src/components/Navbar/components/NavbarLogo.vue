<template>
    <router-link class="navbar-brand text-white navbar__logo" :to="{name: 'home'}">Blog.com</router-link>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .navbar__logo {
        transition: all 0.3s ease;
        color: $color-white;
        margin: 0;

        &:hover {
            color: $color-green-light;
        }
    }

    @media (min-width: 762px) {
        .navbar__logo {
            margin: 0 10em 0 2em;
        }
    }
</style>
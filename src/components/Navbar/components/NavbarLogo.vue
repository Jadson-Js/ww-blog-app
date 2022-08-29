<template>
    <h1><router-link class="navbar-brand navbar__logo" :to="{name: 'home'}">1001 Relatos</router-link></h1>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    .navbar__logo {
        transition: all 0.3s ease;
        color: $color-white !important;
        margin: 0;
        padding: 0;
        font-family: 'Lobster', cursive;
        font-size: .7em;

        &:hover {
            color: $color-red !important;
        }
    }

    @media (min-width: 762px) {
        .navbar__logo {
            margin: 0 10em 0 2em;
        }
    }
</style>


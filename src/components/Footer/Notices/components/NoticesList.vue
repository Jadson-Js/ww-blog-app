<template>
    <ul class="nav notices__list">
        <li class="nav-item notices__item">
            <router-link class="is-link notices__link" :to="{name: 'home'}">Home</router-link>
        </li>

        <li class="nav-item notices__item">
            <router-link class="is-link notices__link" :to="{name: 'category', params: {category: 'Sobre'}}">Sobre</router-link>
        </li>

        <li class="nav-item notices__item">
            <router-link class="is-link notices__link" :to="{name: 'login'}">Login</router-link>
        </li>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .notices__item {
        border-right: 1px solid $color-grey;
        padding: 0 .5em;

        &:last-of-type {
            border: none;
        }
    }

    .notices__link {
        color: $color-mute-white;
    }
</style>
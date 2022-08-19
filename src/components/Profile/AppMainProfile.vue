<template>
    <main class="container-fluid l-profile">
        <div class="d-flex justify-content-end">
            <router-link class="btn btn-sm is-link profile__button" :to="{name: 'newNotice'}">
                Criar artigo
            </router-link>

            <router-link class="btn btn-sm is-link profile__button" :to="{name: 'newCategory'}">
                Criar categoria
            </router-link>
        </div>

        <AppMainProfileMyArticles />

        <AppMainProfileMyCategories />
    </main>
</template>

<script>
    import AppMainProfileMyArticles from './Articles/AppMainProfileMyArticles.vue'
    import AppMainProfileMyCategories from './Categories/AppMainProfileMyCategories.vue'

    export default {
        components: {
            AppMainProfileMyArticles,
            AppMainProfileMyCategories
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-profile {
        background: #fff;
    }

    .profile__button {
        background: $color-green;
        color: #fff;
        margin: 1em;
    }
</style>
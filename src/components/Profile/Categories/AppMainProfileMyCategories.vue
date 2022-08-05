<template>
    <h1 class="h2 mb-2 profile__title">Categorias</h1>

    <div class="d-flex justify-content-start flex-wrap">
        <CatalogCategory v-for="(value, key) in GET_CATEGORIES" :key="key" :category="value" />
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import CatalogCategory from './model/CatalogCategory.vue'

    export default {
        components: {
            CatalogCategory
        },
        computed: mapGetters(['GET_CATEGORIES']),
        mounted () {
            this.$store.dispatch('getCategoriesByApi')
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .profile__title {
        color: $color-dark-black;
        font-weight: 600;
        margin-top: 1.5em;
    }
</style>
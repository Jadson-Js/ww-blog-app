<template>
    <h1 class="h2 mb-2 profile__title">Meus Artigos</h1>

    <div class="d-flex justify-content-start  flex-wrap profile__catalog">
        <CatalogNotice v-for="(value, key) in GET_FEED" :key="key" :notice="value" />
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import CatalogNotice from './model/CatalogNotice.vue'

    export default {
        components: {
            CatalogNotice
        },
        computed: mapGetters(['GET_FEED']),
        mounted() {
            this.$store.commit('SET_RESET')
            this.$store.dispatch('getAllNotices')
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .profile__title {
        color: $color-dark-black;
        font-weight: 600;
    }
</style>
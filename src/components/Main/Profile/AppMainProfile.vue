<template>
    <main class="container-fluid">
        <div class="d-flex justify-content-end">
            <router-link class="btn btn-sm is-link profile__button" :to="{name: 'report'}">
                Criar artigo
            </router-link>
        </div>

        <h1 class="h2 mb-4 profile__title">Meus Artigos</h1>

        <div class="d-flex justify-content-around flex-wrap">
            <CatalogNotice v-for="(value, key) in GET_FEED" :key="key" :notice="value" />
        </div>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CatalogNotice from './Model/CatalogNotice.vue'

    export default {
        components: {
            CatalogNotice
        },
        computed: mapGetters(['GET_FEED']),
        mounted() {
            this.$store.commit('SET_RESET_FEED')
            this.$store.dispatch('getAllNotices')
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .profile__button {
        background: $color-green;
        color: #fff;
        margin: 1em;
    }

    .profile__title {
        color: $color-dark-black;
        font-weight: 600;
    }

    @media (min-width: 762px) {
    }
</style>
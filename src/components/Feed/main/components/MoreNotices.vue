<template>
    <div v-if="GET_HAS_MORE" class="d-flex justify-content-center">
        <button class="btn home__more" @click="moreNotices()">Mais notícias</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        computed: mapGetters(['GET_HAS_MORE']),
        methods: {
            async moreNotices() {
                this.$store.commit('SET_GENERATION')

                if (this.$route.params.category == undefined) {
                    const config = {
                        limit: 3,
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    await this.$store.dispatch('getNoticesByApiToFeed', config)
                } else {
                    const config = {
                        category: this.$route.params.category,
                        limit: 3,
                        offset: ( this.$store.getters.GET_GENERATION - 1 ) * 3
                    }

                    await this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }  
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .home__more {
        width: 10em;
        margin: auto auto 1em;
        border-radius: 20px;
        background: $color-blue-light;
        color: #fff;
        font-weight: 800;
        font-size: 1.3em;
    }
</style>
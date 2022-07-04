<template>
    <div v-if="hasNotices" class="d-flex justify-content-center">
        <button class="btn home__more" @click="moreNotices()">Mais notícias</button>
    </div>

    {{ lastNotice }}
</template>

<script>

    export default {
        data() {
            return {
                hasNotices: true
            }
        },
        computed: {
            lastNotice() {
                return this.$store.getters.GET_FEED_LAST_NOTICE
            }
        },
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
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    await this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }  
            }
        },
        watch: {
            lastNotice(newValue) {
                if (newValue && newValue.id == 1) {
                    this.hasNotices = false
                } else {
                    this.hasNotices = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .home__more {
        width: 10em;
        margin: auto;
        border-radius: 20px;
        background: $color-blue-light;
        color: #fff;
        font-weight: 800;
        font-size: 1.3em;
    }
</style>
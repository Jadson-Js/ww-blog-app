<template>
    <button @click="moreNotices()">Mais notícias</button>
</template>

<script>
    export default {
        methods: {
            moreNotices() {
                this.$store.commit('SET_GENERATION')

                if (this.$route.params.category == undefined) {
                    const config = {
                        limit: 3,
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    this.$store.dispatch('getNoticesByApiToFeed', config)
                } else {
                    const config = {
                        category: this.$route.params.category,
                        limit: 3,
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }

            }}
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

</style>
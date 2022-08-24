<script>
    export default {
        mounted() {
            this.$watch('$route', async (newRoute, oldRoute) => {
                if (newRoute.name == 'category' && oldRoute.name == 'category') {
                    this.$store.commit('SET_RESET')

                    const config = {
                        category: newRoute.params.category,
                        limit: 3,
                        offset: 0
                    }

                    this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }
                
                if (newRoute.name == 'notice' && oldRoute.name == 'notice') {
                    this.$store.commit('SET_RESET')

                    this.$store.dispatch('getNoticesByApiToArticle', newRoute.params.noticeId)

                    const config = {
                        category: newRoute.params.category,
                        limit: 3,
                        offset: 0
                    }

                    this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }
            })
        }
    }
</script>
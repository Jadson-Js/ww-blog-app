<script>
    export default {
        mounted() {
            this.$watch('$route', (newRoute) => {
                if (newRoute.name == 'notice') {
                    const noticeId = this.$route.params.noticeId

                    this.$store.dispatch('getNoticesByApiToArticle', noticeId)

                } else if (newRoute.name != 'login' && newRoute.name != 'profile') {
                    this.$store.commit('SET_RESET')

                    if (this.$route.params.category == undefined) {
                        const config = {
                            limit: 3,
                            offset: 3
                        }

                        this.$store.dispatch('getNoticesByApiToFeed', config)
                    } else {
                        const config = {
                            category: this.$route.params.category,
                            limit: 3,
                            offset: 0
                        }

                        this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                    }
                }
            })
        }
    }
</script>
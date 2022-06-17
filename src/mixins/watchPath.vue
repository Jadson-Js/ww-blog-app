<script>
    export default {
        mounted() {
            this.$watch('$route', (newRoute) => {
                if (newRoute.name == 'notice') {
                    const noticeId = this.$route.params.noticeId

                    this.$store.dispatch('getNoticesByApiToArticle', noticeId)
                }

                if (newRoute.name != 'login' || newRoute.name != 'profile') {
                    if (this.$route.params.category == undefined) {
                        const config = {
                            limit: 14,
                            offset: 3
                        }

                        this.$store.dispatch('getNoticesByApiToFeed', config)
                    } else {
                        const config = {
                            category: this.$route.params.category,
                            limit: 14,
                            offset: 1
                        }

                        this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                    }
                }
            })
        }
    }
</script>
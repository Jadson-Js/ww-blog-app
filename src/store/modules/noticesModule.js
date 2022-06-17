import axios from 'axios'

export default {
    state: () => ({
        notices: {
            slide: [],
            feed: [],
            article: {}
        }
    }),

    getters: {
        GET_SLIDE_NOTICES(state) {
            return state.notices.slide
        },

        GET_FEED_NOTICES(state) {
            return state.notices.feed
        },

        GET_ARTICLE_NOTICE(state) {
            return state.notices.article
        }
    },

    mutations: {
        SET_NOTICES_TO_SLIDE(state, data) {
            state.notices.slide = data
        },

        SET_NOTICES_TO_FEED(state, data) {
            state.notices.feed = data
        },

        SET_NOTICE_TO_ARTICLE(state, data) {
            state.notices.article = data
        }
    },

    actions: {
        async getNoticesByApiToSlide({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_NOTICES_TO_SLIDE', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToFeed({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_NOTICES_TO_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToCategoryFeed({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/category/' + config.category + '/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_NOTICES_TO_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToArticle({ commit }, id) {
            try {
                const article = await axios.get('http://localhost:3000/article/' + id)

                commit('SET_NOTICE_TO_ARTICLE', article.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },
    }
}
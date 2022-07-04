import axios from 'axios'

export default {
    state: () => ({
        notices: {
            slide: [],
            feed: [],
            article: {},
            generation: 1
        },
    }),

    getters: {
        GET_SLIDE(state) {
            return state.notices.slide
        },

        GET_FEED(state) {
            return state.notices.feed
        },

        GET_FEED_LAST_NOTICE(state) {
            const feed = state.notices.feed
            return feed[feed.length - 1]
        },

        GET_ARTICLE(state) {
            return state.notices.article
        },

        GET_GENERATION(state) {
            return state.notices.generation
        }
    },

    mutations: {
        SET_SLIDE(state, data) {
            state.notices.slide = data
        },

        SET_FEED(state, data) {
            for(let value of data) {
                state.notices.feed.push(value)
            } 
        },

        SET_RESET_FEED(state) {
            state.notices.generation = 1
            state.notices.feed = []
        },

        SET_ARTICLE(state, data) {
            state.notices.article = data
        },

        SET_GENERATION(state) {
            state.notices.generation += 1
        },
    },

    actions: {
        async getNoticesByApiToSlide({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_SLIDE', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getAllNotices({ commit }) {
            try {
                const articles = await axios.get('http://localhost:3000/articles')
                
                commit('SET_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToFeed({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/limit/' + config.limit + '/offset/' + config.offset)
                
                commit('SET_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToCategoryFeed({ commit }, config) {
            try {
                const articles = await axios.get('http://localhost:3000/articles/category/' + config.category + '/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToArticle({ commit }, id) {
            try {
                const article = await axios.get('http://localhost:3000/article/' + id)

                commit('SET_ARTICLE', article.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async deleteNotice(none, id) {
            try {
                await axios.delete('http://localhost:3000/article/' + id)

            } catch (error) {
                alert(error)    
                console.log(error)
            }
        }
    }
}
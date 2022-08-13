import axios from 'axios'

export default {
    state: () => ({
        notices: {
            slide: [],
            feed: [],
            article: {},
            generation: 1,
            hasMore: true
        },
    }),

    getters: {
        GET_SLIDE(state) {
            return state.notices.slide
        },

        GET_FEED(state) {
            return state.notices.feed
        },

        GET_ARTICLE(state) {
            return state.notices.article
        },

        GET_GENERATION(state) {
            return state.notices.generation
        },

        GET_HAS_MORE(state) {
            return state.notices.hasMore
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

        SET_RESET(state) {
            state.notices.slide = []
            state.notices.feed = []
            state.notices.article = {}
            state.notices.generation = 1
            state.notices.hasMore = true
        },

        SET_ARTICLE(state, data) {
            state.notices.article = data
        },

        SET_GENERATION(state) {
            state.notices.generation += 1
        },

        SET_HAS_MORE(state, data) {
            state.notices.hasMore = data
        }
    },

    actions: {
        async getNoticesByApiToSlide({ commit }, config) {
            try {
                const articles = await axios.get('https://ww-blog-api.herokuapp.com/articles/limit/' + config.limit + '/offset/' + config.offset)

                commit('SET_SLIDE', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getAllNotices({ commit }) {
            try {
                const articles = await axios.get('https://ww-blog-api.herokuapp.com/articles')
                
                commit('SET_FEED', articles.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToFeed({ commit }, config) {
            try {
                const articles = await axios.get('https://ww-blog-api.herokuapp.com/articles/limit/' + config.limit + '/offset/' + config.offset)
                
                articles.data.data.length == 3 ? commit('SET_FEED', articles.data.data) : [commit('SET_FEED', articles.data.data), commit('SET_HAS_MORE', false)]
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToCategoryFeed({ commit }, config) {
            try {
                const articles = await axios.get('https://ww-blog-api.herokuapp.com/articles/category/' + config.category + '/limit/' + config.limit + '/offset/' + config.offset)

                articles.data.data.length == 3 ? commit('SET_FEED', articles.data.data) : [commit('SET_FEED', articles.data.data), commit('SET_HAS_MORE', false)]
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByApiToArticle({ commit }, id) {
            try {
                const article = await axios.get('https://ww-blog-api.herokuapp.com/article/' + id)

                commit('SET_ARTICLE', article.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async deleteNotice(none, id) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'DELETE',
                url: 'https://ww-blog-api.herokuapp.com/article/' + id,
                headers: {
                    'Authorization': `${token}` 
                 }
            };

            try {
                await axios(options)

            } catch (error) {
                alert(error)    
                console.log(error)
            }
        }
    }
}
import axios from 'axios'

export default {
    state: () => ({
        categories: [],
        categoryNotices: [{ category: 'Default', notices: [1, 2, 3] }]
    }),

    getters: {
        GET_CATEGORIES(state) {
            return state.categories
        },

        GET_CATEGORY_NOTICES(state) {
            return state.categoryNotices
        },
    },

    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data
        },

        SET_CATEGORY_NOTICES(state, data) {
            const columnNotices = {
                category: data.title,
                notices: data.articles
            }

            state.categoryNotices.push(columnNotices)
        },
    },

    actions: {
        async getCategoriesByApi({ commit }) {
            try {
                const categories = await axios.get('http://localhost:3000/categories')

                commit('SET_CATEGORIES', categories.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        },

        async getNoticesByCategoryIdByApi({ commit }, categoryId) {
            try {
                const data = await axios.get('http://localhost:3000/category/' + categoryId)

                commit('SET_CATEGORY_NOTICES', data.data.data)
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        }
    }
}
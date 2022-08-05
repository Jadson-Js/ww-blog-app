import axios from 'axios'

export default {
    state: () => ({
        categories: [],
        categoryNotices: [{
            category: 'Default',
            notices: [1, 2, 3]
        }],
        newCategoryId: undefined
    }),

    getters: {
        GET_CATEGORIES(state) {
            return state.categories
        },

        GET_CATEGORY_NOTICES(state) {
            return state.categoryNotices
        },

        GET_NEW_CATEGORY_ID (state) {
            return state.newCategoryId
        }
    },

    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data
        },

        SET_CATEGORY_NOTICES(state, data) {
            const columnNotices = {
                id: data.id,
                category: data.title,
                notices: data.articles
            }

            state.categoryNotices.push(columnNotices)
        },

        SET_NEW_CATEGORY_ID(state, data) {
            state.newCategoryId = data
        }
    },

    actions: {
        async getCategoriesByApi({
            commit
        }) {
            try {
                const categories = await axios.get('http://localhost:3000/categories')

                commit('SET_CATEGORIES', categories.data.data)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async getNoticesByCategoryIdByApi({
            commit
        }, categoryId) {
            try {
                const data = await axios.get('http://localhost:3000/category/' + categoryId)

                commit('SET_CATEGORY_NOTICES', data.data.data)
            } catch (error) {
                return error.response
            }
        },

        async createCategoryByApi({
            commit
        }, categoryTitle) {
            const options = {
                method: 'POST',
                url: 'http://localhost:3000/category',
                data: {
                    title: categoryTitle,
                }
            };

            const categoryCreated = await axios(options)

            commit('SET_NEW_CATEGORY_ID', categoryCreated.data.data.id)
        },

        async editCategory({ commit }, data) {

            const options = {
                method: 'PUT',
                url: 'http://localhost:3000/category/' + data.categoryId,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    title: data.title
                }
            };

            try {
                // await axios(options)
                console.log(options)
            } catch (error) {
                console.log(error)
                commit('SET_SUCCESS', false)
            }
        },

        async deleteCategory(none, id) {
            try {
                await axios.delete('http://localhost:3000/category/' + id)

            } catch (error) {
                alert(error)    
                console.log(error)
            }
        }
    }
}
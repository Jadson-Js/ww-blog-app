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
                category: data,
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
                const categories = await axios.get('https://ww-blog-api.herokuapp.com/categories')

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
                const data = await axios.get('https://ww-blog-api.herokuapp.com/category/' + categoryId)

                commit('SET_CATEGORY_NOTICES', data.data.data)
            } catch (error) {
                return error.response
            }
        },

        async createCategory({ commit }, category) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'POST',
                url: 'https://ww-blog-api.herokuapp.com/category',
                headers: {
                   'Authorization': `${token}` 
                },
                data: {
                    title: category.title,
                    description: category.description,
                    keywords: category.keywords
                }
            };

            try {
                const categoryCreated = await axios(options)

                commit('SET_NEW_CATEGORY_ID', categoryCreated.data.data.id)
                commit('SET_SUCCESS', true)
            } catch (error) {
                const errors = error.response.data.message.errors
                for (let er of errors) {
                    alert(er.msg)
                }
                console.log(error)
                commit('SET_SUCCESS', false)
            }
        },

        async editCategory({ commit }, data) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'PUT',
                url: 'https://ww-blog-api.herokuapp.com/category/' + data.categoryId,
                headers: {
                    'Authorization': `${token}` 
                 },
                data: {
                    title: data.title
                }
            };

            try {
                await axios(options)
            } catch (error) {
                const errors = error.response.data.message.errors
                for (let er of errors) {
                    alert(er.msg)
                }
                console.log(error)
                commit('SET_SUCCESS', false)
            }
        },

        async deleteCategory(none, id) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'DELETE',
                url: 'https://ww-blog-api.herokuapp.com/category/' + id,
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
import axios from 'axios'

export default {
    state: () => ({
        report: {
            success: false
        },
    }),

    getters: {
        GET_SUCCESS(state) {
            return state.report.success
        }
    },

    mutations: {
        SET_SUCCESS(state, data) {
            state.report.success = data
        }
    },

    actions: {
        async reportNotice({ commit }, formData) {
            const options = {
                method: 'POST',
                url: 'http://localhost:3000/article',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    image: formData.image,
                    title: formData.title,
                    description: formData.description,
                    content: formData.content,
                    CategoryId: formData.CategoryId,
                }
            };

            try {
                await axios(options)

                commit('SET_SUCCESS', true)
            } catch (error) {
                commit('SET_SUCCESS', false)
            }
        },

        async editReportNotice({ commit }, data) {
            const options = {
                method: 'PUT',
                url: 'http://localhost:3000/article/' + data.noticeId,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    image: data.formData.image,
                    title: data.formData.title,
                    description: data.formData.description,
                    content: data.formData.content,
                    CategoryId: data.formData.CategoryId,
                }
            };

            console.log(options)

            try {
                await axios(options)

                commit('SET_SUCCESS', true)
            } catch (error) {
                console.log(error)
                commit('SET_SUCCESS', false)
            }
        }
    }
}
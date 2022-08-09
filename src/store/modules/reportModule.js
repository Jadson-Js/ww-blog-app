import axios from 'axios'

export default {
    state: () => ({
        report: {
            success: false,
            imageUrl: ''
        },
    }),

    getters: {
        GET_SUCCESS(state) {
            return state.report.success
        },

        GET_IMAGE_URL(state) {
            return state.report.imageUrl
        },
    },

    mutations: {
        SET_SUCCESS(state, data) {
            state.report.success = data
        },

        SET_IMAGE_URL(state, url) {
            state.report.imageUrl = url
        }
    },

    actions: {
        async uploadImg({ commit }, image) {

            axios.post('https://api.imgbb.com/1/upload?expiration=31536000&key=f7bb05661ec4bb0c7f7cf05123eab4a6', image)
                .then((response) => {
                    commit('SET_IMAGE_URL', response.data.data.image.url)
                })
                .catch((error) => {
                    console.log('error', error)
                    alert('try agian')
                })
        },

        async reportNotice({
            getters,
            commit
        }, formData) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'POST',
                url: 'https://ww-blog-api.herokuapp.com/article',
                headers: {
                    'Authorization': `${token}`
                },
                data: {
                    ImageName: getters.GET_IMAGE_URL,
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

        async editReportNotice({
            getters,
            commit
        }, data) {
            let token = document.cookie.split('token=')[1]

            const options = {
                method: 'PUT',
                url: 'https://ww-blog-api.herokuapp.com/article/' + data.noticeId,
                headers: {
                    'Authorization': `${token}`
                },
                data: {
                    ImageName: getters.GET_IMAGE_URL,
                    title: data.formData.title,
                    description: data.formData.description,
                    content: data.formData.content,
                    CategoryId: data.formData.CategoryId,
                }
            };

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
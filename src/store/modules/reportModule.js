import axios from 'axios'

export default {
    state: () => ({
        report: {
            success: false,
            ImageUrl: ''
        },
    }),

    getters: {
        GET_SUCCESS(state) {
            return state.report.success
        },

        GET_IMAGE_URL(state) {
            return state.report.ImageUrl
        },
    },

    mutations: {
        SET_SUCCESS(state, data) {
            state.report.success = data
        },

        SET_IMAGE_URL(state, url) {
            state.report.ImageUrl = url   
        }
    },

    actions: {
        async uploadImg({ commit }, image) {
            await axios.post('https://api.imgbb.com/1/upload?expiration=31536000&key=f7bb05661ec4bb0c7f7cf05123eab4a6', image)
                .then((response) => {
                    response.data.data.medium != undefined ? commit('SET_IMAGE_URL', response.data.data.medium.url) : commit('SET_IMAGE_URL', response.data.data.image.url)
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
                    ImageUrl: await getters.GET_IMAGE_URL,
                    title: formData.title,
                    description: formData.description,
                    keywords: formData.keywords,
                    content: formData.content,
                    CategoryId: parseInt(formData.CategoryId),
                }
            };

            console.log(options)

            try {
                await axios(options)

                commit('SET_SUCCESS', true)
            } catch (error) {
                // const errors = error.response.data.message.errors
                // for (let er of errors) {
                //     alert(er.msg)
                // }
                console.log(error)
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
                    ImageUrl: await getters.GET_IMAGE_URL,
                    title: data.formData.title,
                    description: data.formData.description,
                    keywords: data.formData.keywords,
                    content: data.formData.content,
                    CategoryId: data.formData.CategoryId,
                }
            };

            console.log(options)

            try {
                await axios(options)

                commit('SET_SUCCESS', true)
            } catch (error) {
                // const errors = error.response.data.message.errors
                // for (let er of errors) {
                //     alert(er.msg)
                // }
                console.log(error)
                commit('SET_SUCCESS', false)
            }
        }
    }
}
import axios from 'axios'

export default {
    state: () => ({
        report: {
            image: undefined
        },
    }),

    getters: {
        GET_IMAGE(state) {
            return state.report.image
        }
    },

    mutations: {
        SET_IMAGE(state, data) {
            state.report.image = data
        }
    },

    actions: {
        async reportNotice(none, formData) {
            try {
                console.log(formData)
                axios.post('http://localhost:3000/article', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  })
            } catch (error) {
                alert(error)    
                console.log(error)
            }
        }
    }
}
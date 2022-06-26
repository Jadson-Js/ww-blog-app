import axios from 'axios'

export default {
    state: () => ({
        isLogged: true
    }),

    getters: {
        GET_IS_LOGGED(state) {
            return state.isLogged
        }
    },

    mutations: {
        SET_IS_LOGGED(state, data) {
            state.isLogged = data
        },
        SET_LOGOUT(state) {
            state.isLogged = false
        }
    },

    actions: {
        async authAdminByApi({ commit }, data) {
            const options = {
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    name: data.userName,
                    password: data.userPassword
                }
            };
         
            try {
                const login = await axios(options)
                const expiryDate = new Date( Date.now() + 30 * 60 * 1000 ).toUTCString();

                document.cookie=`token=${login.data.token}; expires=${expiryDate}; path=/`

                commit('SET_IS_LOGGED', login.data.auth)
            } catch (error) {
                commit('SET_IS_LOGGED', false)
            }
        }
    }
}
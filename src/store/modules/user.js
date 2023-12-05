export default {
    state: {
        username: '',
        isLoggedIn: false,
    },
    mutations: {
        login(state, { username }) {
            state.username = username
            state.isLoggedIn = true
        },
    },
    actions: {
        ['user/login']({ commit }, { username }) {
            commit('login', { username })
        },
    },
}

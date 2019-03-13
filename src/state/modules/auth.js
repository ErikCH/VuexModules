export default {
    state: {
        
        username: ''
    },
    getters: {
        username: state => state.username
    },
    actions: {
        addUserName({commit}, username) {
            commit('ADD_USERNAME', username);
        }
    },
    mutations: {
        ADD_USERNAME(state, name) {
            state.username = name;
        }
    }
}
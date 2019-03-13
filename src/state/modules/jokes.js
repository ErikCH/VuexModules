export default {
    state: {
        jokes: {},
    },
    getters: {
        jokes: state => state.jokes,
        latestId: state => {
            let id = 0;
            state.jokes.jokes.forEach(m => {
                if (m.id > id) {
                id = m.id;
                }
            });
            return id;
        },
    },
    actions: {
        async initStore({state, commit}) {
            if (!state.jokes['jokes']) {
                const jokes = await fetch('/jokes.json');
                commit('SET_JOKES', await jokes.json());
            }
        },
        addJoke({commit}, joke) {
            commit('ADD_JOKE', joke);
        },
    },
    mutations: {
        SET_JOKES(state, jokes) {
            state.jokes = jokes;
        },
        ADD_JOKE(state, joke) {
            state.jokes.jokes.push(joke);
            console.log('added', state.jokes);
        },
    }
}
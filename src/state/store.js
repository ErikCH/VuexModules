import Vue from 'vue';
import Vuex from 'vuex';
import jokes from './modules/jokes'
import auth from './modules/auth'
import modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    jokes,
    auth
  },
});

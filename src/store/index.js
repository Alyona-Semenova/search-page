import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    error: null,
  },

  getters: {
    users: state => state.users,
    error: state => state.error,
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await api.getUsers();
        commit('SET_USERS', response.data);
      } catch (error) {
        commit('SET_ERROR', error);
        console.error('Ошибка при получении данных пользователей:', error);
      }
    }
  },
  modules: {
  }
})
